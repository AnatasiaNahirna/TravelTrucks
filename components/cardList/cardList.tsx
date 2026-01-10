'use client'

import Camper from '@/types/camper';
import css from './cardList.module.css';
import CamperCard from '../CamperCard/camperCard';
import { fetchCampers } from '@/lib/api/api';
import { useState } from 'react';

interface CamperListProps {
    campers: Camper[],
}

export default function CardList({ campers }: CamperListProps) {
    const [page, addPage] = useState(1);
    const handleBtnClick = async() => {
        await fetchCampers(page);
        addPage(page => page + 1)
    }

    return (
        <div className={css.wrapper}>
        <ul className={css.list}>
            {campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper}></CamperCard>
            ))}
        </ul>
            <button className={css.loadMore} onClick={handleBtnClick}>Load more</button>
        </div>
    )
}