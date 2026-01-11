'use client';
import { useRouter } from "next/navigation";
import css from "./hero.module.css";

export default function Hero() {
    const router = useRouter();
    const buttonClick = () => {
        router.push('/catalog')
    }

    return (
        <section className={css.section}>
      <div className={`container ${css.hero}`}>
        <div className={css.contentWrapper}>
          <h1 className={css.mainText}>Campers of your dreams</h1>
          <p className={css.text}>You can find everything you want in our catalog</p>
          <button className={`${css.button} orangeButton`} type='button' onClick={buttonClick}>View Now</button>
        </div>
      </div>
    </section>
    )
}