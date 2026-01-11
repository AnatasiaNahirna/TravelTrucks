'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import css from './filters.module.css';
import { nextServer } from '@/lib/api/api';

interface filterValuesProps {
	svg: string;
	title: string;
	key: string;
	value?: string;
}

const filterValues: filterValuesProps[] = [
	{ key: 'AC', title: 'AC', svg: '/svg/ac.svg' },
	{ key: 'transmission', value: 'automatic', title: 'Automatic', svg: '/svg/automatic.svg' },
	{ key: 'kitchen', title: 'Kitchen', svg: '/svg/kitchen.svg' },
	{ key: 'TV', title: 'TV', svg: '/svg/tv.svg' },
	{ key: 'bathroom', title: 'Bathroom', svg: '/svg/bathroom.svg' },
]

const vehicleType: filterValuesProps[] = [
	{ key: 'form', value: 'panelTruck', title: 'Van', svg: '/svg/van.svg' },
	{ key: 'form', value: 'fullyIntegrated', title: 'Fully Integrated', svg: '/svg/fullyIntegrated.svg' },
	{ key: 'form', value: 'alcove', title: 'Alcove', svg: '/svg/alcove.svg' },
]

export default function Filter() {
	const router = useRouter();
  const searchParams = useSearchParams();

	const [location, setLocation] = useState(searchParams.get('location') || '');

	const [activeFilters, setActiveFilters] = useState<Record<string, string | boolean>>(() => {
    const initial: Record<string, string | boolean> = {};
    searchParams.forEach((value, key) => {
      if (key !== 'location') {
         initial[key] = value === 'true' ? true : value;
      }
    });
    return initial;
  });

	const toggleFilter = (key: string, value: string | boolean = true) => {
			setActiveFilters(prev => {
				const newState = { ...prev };
				
				if (key === 'form') {
					return newState[key] === value 
							? (() => { const { [key]: _, ...rest } = newState; return rest; })()
							: { ...newState, [key]: value };
				}
				if (newState[key]) {
					delete newState[key];
				} else {
					newState[key] = value;
				}
				return newState;
			});
		};

		const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) params.set('location', location);

    Object.entries(activeFilters).forEach(([key, value]) => {
      params.set(key, String(value));
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await nextServer.get('/campers', { 
          params: Object.fromEntries(searchParams.entries()) 
        });
        console.log("Camper Data:", response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [searchParams]);
		
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
					value={location}
					placeholder="Kyiv, Ukraine"
					onChange={(e) => setLocation(e.target.value)}
				/>
			</div>

			<p className={css.filterText}>Filters</p>

			<h3 className={css.filterTitle}>Vehicle equipment</h3>
			<div className={css.filters}>
				{filterValues.map((item) => {
					const isActive = activeFilters[item.key] === (item.value || true);
					return (
						<button 
              key={item.title} 
              className={`${css.filterBtn} ${isActive ? css.active : ''}`} 
              type='button' 
              onClick={() => toggleFilter(item.key, item.value || true)}
            >
              <svg className={css.filterSvg}><use href={item.svg} /></svg>
              <p className={css.btnText}>{item.title}</p>
            </button>
					)
				})}
			</div>

			<div className={css.filterWrap}>
				<h3 className={css.filterTitle}>Vehicle type</h3>
				<div className={css.filters}>
					{vehicleType.map((item) => {
						const isActive = activeFilters[item.key] === item.value;
						return (
							<button 
                key={item.title} 
                className={`${css.filterBtn} ${isActive ? css.active : ''}`} 
                type='button' 
                onClick={() => toggleFilter(item.key, item.value)}
              >
                <svg className={css.filterSvg}><use href={item.svg} /></svg>
                <p className={css.btnText}>{item.title}</p>
              </button>
						)
					})}
				</div>
			</div>

			<button className={`${css.searchBtn} orangeButton`} onClick={handleSearch}>Search</button>
		</div>
	);
};
