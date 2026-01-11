import css from './category.module.css';

type categoryProps = {
    icon: string,
    title: string,
}

export default function Category({icon, title}: categoryProps) { 
    return (
        <div className={css.div}>
            <svg className={css.icon}>
                <use href={`/svg/${title}.svg`} />
            </svg>
            <p className={css.title}>{title}</p>
        </div>
    )
};