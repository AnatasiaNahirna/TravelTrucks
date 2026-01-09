'use client'

import css from './camperCard.module.css';
import type Camper from '../../types/camper';
import Image from 'next/image';
import { camperCategories } from '../../lib/store/camperCategories';
import { useState } from 'react';
import { useRouter } from "next/navigation";

interface CamperCardProps {
    camper: Camper,
}

export default function CamperCard({ camper }: CamperCardProps) { 
    const router = useRouter();
    const [favourite, isFavourited] = useState(false);
    const handleFavouriteClick = () => {
        if (!favourite) {
            isFavourited(true);
        } else {
            isFavourited(false);
        }
    }
    const handleShowMoreCLick = () => {
        router.push(`/catalog/${camper.id}`);
    }

    return (
        <li className={css.card}>
            <div className={css.imgWrapper}>
            <Image
                alt={camper.name}
                width='292'
                height='320'
                src={camper.gallery[0]}
                />
            </div>

            <div className={css.camperInfo}>
                <div className={css.titleWrapper}>
                    <h2 className={css.title}>{camper.name}</h2>
                    <div className={css.priceWrapper}>
                        <p className={css.price}>{camper.price}</p>
                        <button className={css.likeButton} onClick={handleFavouriteClick}>
                            <svg>
                                <use href="/svg/likeButton.svg"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={css.ratingAndLocationWrap}>
                    <div className={css.rating}>
                        <svg>
                            <use href='/svg/star.svg'/>
                        </svg>
                        <p>{camper.rating} ({camper.reviews.reviewer_rating})</p>
                    </div>
                    <div className={css.location}>
                        <svg className={css.locationSvg}>
                            <use href='/svg/location.svg'/>
                        </svg>
                        <p>{camper.location}</p>
                    </div>
                </div>
                <p className={css.descripotion}>{camper.description}</p>

                <div className={css.categories}>
                    {camperCategories.map(({ icon, title }) => {
                        return null // додам пізніше
                    })}
                </div>
                <button className={css.showMoreBtn} onClick={handleShowMoreCLick}>Show More</button>
            </div>
        </li>
    )


};