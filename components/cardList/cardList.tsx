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
    const [allCampers, setAllCampers] = useState<Camper[]>(campers);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

   const handleBtnClick = async () => {
        const nextPage = page + 1;

        try {
            const newCampers = await fetchCampers(nextPage);
            if (newCampers.items.length === 0) {
                setHasMore(false);
            }
            setAllCampers((prev) => [...prev, ...newCampers.items]);
            setPage(nextPage);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={css.wrapper}>
        <ul className={css.list}>
            {allCampers.map((camper) => (
                <CamperCard key={camper.id} camper={camper}></CamperCard>
            ))}
            </ul>
            <div className={css.btnWrap}>
                {hasMore ? <button className={css.loadMore} onClick={handleBtnClick}>Load more</button> : null}
            </div>
        </div>
    )
}