import CardList from '@/components/cardList/cardList'
import css from './catalog.module.css'
import { fetchCampers } from '@/lib/api/api'
import Filter from '@/components/filters/filters'
import { Suspense } from 'react'

export default async function Catalog() {
    const campers = await fetchCampers()

    return (
        <section className={css.section}>
            <Suspense fallback={<div>Loading filters...</div>}>
                <Filter/>
            </Suspense>
            <CardList campers={campers.items} />
        </section>
    )
}