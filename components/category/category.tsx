import css from './category.module.css';

export default function Category(id: string, title: string) { 
    return (
        <div className={css.div}>
            <svg className={css.icon}>
                <use href={`/svg/${id}`} />
            </svg>
            <p className={css.title}>{title}</p>
        </div>
    )
};