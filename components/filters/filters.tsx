'use client'
import { useState } from 'react';
import css from './filters.module.css';

interface filterValuesProps {
    svg: string;
    title: string;
} 

const filterValues: filterValuesProps[] = [
    { svg: '/svg/ac.svg', title: 'AC' },
    { svg: '/svg/automatic.svg', title: 'Automatic' },
    { svg: '/svg/kitchen.svg', title: 'kitchen' },
    { svg: '/svg/tv.svg', title: 'TV' },
    { svg: '/svg/bathroom.svg', title: 'Bathroom' },
]

const vehicleType: filterValuesProps[] = [
    { svg: '/svg/van.svg', title: 'Van' },
    { svg: '/svg/fullyIntegrated.svg', title: 'Fully Integrated' },
    { svg: '/svg/alcove.svg', title: 'Alcove' },
]

export default function Filter() {
    const setLocation = () => { return null };
    const applyFilters = () => { return null };
    const selectType = () => { return null };
    const search = () => { return null };

     return (
    <div className={css.wrapper}>
        <p className={css.locText}>Location</p>
        <div className={css.inputWrapper}>
          <svg className={css.inputSvg}>
            <use href="/svg/location.svg" />
          </svg>
          <input
            type="text"
            className={css.input}
            placeholder="Kyiv, Ukraine"
            onChange={setLocation}
          />
        </div>

      <p className={css.filterText}>Filters</p>

        <h3 className={css.filterTitle}>Vehicle equipment</h3>
                 <div className={css.filters}>
                 {filterValues.map((filter) => {
                         return (
                             <button key={filter.title} className={`${css.filterBtn}`} type='button' onClick={() => applyFilters()}>
                                 <svg className={css.filterSvg}>
                                     <use href={filter.svg}/>
                                 </svg>
                                 <p className={css.btnText}>{filter.title}</p>
                             </button>
                         )
                     })}         
                </div>

      <div className={css.filterWrap}>
        <h3 className={css.filterTitle}>Vehicle type</h3>
        <div className={css.filters}>
            {vehicleType.map((filter) => {
                return (
                    <button key={filter.title} className={`${css.filterBtn} `} type='button' onClick={() => selectType()}>
                        <svg className={css.filterSvg}>
                            <use href={filter.svg}/>
                        </svg>
                        <p className={css.btnText}>{filter.title}</p>
                    </button>
                )
            })}
        </div>
      </div>

      <button className={`${css.searchBtn} orangeButton`} onClick={search}>Search</button>
    </div>
  );
};

