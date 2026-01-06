'use client'

import Link from "next/link";
import css from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname(); 

    return (
        <header className={css.header}>
            <Link href="/" aria-label="Home" className={css.logo}><span className={css.logopart}>Travel</span>Trucks</Link>
            <nav className={css.navigation}>
                <ul className={css.navUl}>
                <li>
                    <Link className={`${css.navLink} a ${pathname === '/' ? css.linkactive : ''}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`${css.navLink} a ${pathname === '/catalog' ? css.linkactive : ''}`} href="/catalog">Catalog</Link>
                </li>
                </ul>
            </nav>
        </header>)
}