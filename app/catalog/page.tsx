import CardList from '@/components/cardList/cardList'
import css from './catalog.module.css'
import { fetchCampers } from '@/lib/api/api'
import Filter from '@/components/filters/filters'

export default async function Catalog() {
    const campers = await fetchCampers()

    return (
        <section className={css.section}>
            <Filter/>
            <CardList campers={campers.items} />
        </section>
    )
}