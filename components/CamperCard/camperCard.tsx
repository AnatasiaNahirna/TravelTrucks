'use client'

import css from './camperCard.module.css';
import type Camper from '../../types/camper';
import Image from 'next/image';
import { camperCategories } from '../../lib/store/camperCategories';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Category from '../category/category';

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
                    className={css.camperImg}
                    alt={camper.name}
                    fill
                    style={{objectFit: 'cover'}}
                    src={camper.gallery[0].thumb}
                />
            </div>

            <div className={css.camperInfo}>
                <div className={css.titleWrapper}>
                    <h2 className={css.title}>{camper.name}</h2>
                    <div className={css.priceWrapper}>
                        <p className={css.price}>€{camper.price}</p>
                        <button className={css.likeButton} onClick={handleFavouriteClick}>
                            <svg>
                                <use href={favourite ? '/svg/likedButton.svg' : '/svg/likeButton.svg/'} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={css.ratingAndLocationWrap}>
                    <div className={css.rating}>
                        <svg className={css.ratingSvg}>
                            <use href='/svg/star.svg'/>
                        </svg>
                        <p className={`${css.ratText} ${css.ratingText}`}>{camper.rating} ({camper.reviews.length} Reviews)</p>
                    </div>
                    <div className={css.location}>
                        <svg className={css.ratingSvg}>
                            <use href='/svg/location.svg'/>
                        </svg>
                        <p className={css.ratText}>{camper.location}</p>
                    </div>
                </div>
                <p className={css.descripotion}>{camper.description}</p>

                <div className={css.categories}>
                    {camperCategories
                        .filter(({ key }) => {
                            const value = camper[key];
                            
                            if (typeof value === 'boolean') {
                                return value === true;          // показуємо тільки якщо true
                            }

                            if (typeof value === 'string') {
                                return value.length > 0;        // або value !== ''
                            }
                        })
                        .slice(0,5)
                        .map(({ title }) => {
                        return <Category key={title} title={title}/>
                    })}
                </div>
                <button className={`${css.showMoreBtn} orangeButton`} onClick={handleShowMoreCLick}>Show More</button>
            </div>
        </li>
    )


};