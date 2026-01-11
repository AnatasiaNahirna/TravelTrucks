'use client'
import css from './filters.module.css';

interface FiltersState {
  location: string;
  vehicleType: VehicleType | "";
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
}

type VehicleType = "panelTruck" | "fullyIntegrated" | "alcove";

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
    // const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     onChange({ ...filters, location: e.target.value });
    // };

    //     // Тогл булевих фільтрів
    // const toggleFilter = (key: keyof Omit<FiltersState, "location" | "vehicleType">) => {
    //     onChange({ ...filters, [key]: !filters[key] });
    // };

    //     // Вибір типу транспортного засобу
    // const setVehicleType = (type: VehicleType) => {
    //     onChange({ ...filters, vehicle })
    // }
    const handleSearch = () => {return null}
    const onFilterClick = () => { return null }
    const onTypeClick =() => {return null}

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
            // value={filters.location}
            // onChange={handleLocationChange}
          />
        </div>

      <p className={css.filterText}>Filters</p>

        <h3 className={css.filterTitle}>Vehicle equipment</h3>
                 <div className={css.filters}>
                     {filterValues.map((filter) => {
                         return (
                             <button key={filter.title} className={`${css.filterBtn}`} type='button' onClick={onFilterClick}>
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
                    <button key={filter.title} className={`${css.filterBtn}`} type='button' onClick={onTypeClick}>
                        <svg className={css.filterSvg}>
                            <use href={filter.svg}/>
                        </svg>
                        <p className={css.btnText}>{filter.title}</p>
                    </button>
                )
            })}
        </div>
      </div>

      <button className={`${css.searchBtn} orangeButton`} onClick={handleSearch}>Search</button>
    </div>
  );
};

