import React from 'react'
import s from './filter.module.scss'

type Filter = {
    onClickFilter: () => void
}

export const Filter: React.FC<Filter> = ({ onClickFilter }) => {
    return <div className={s.wrapper}>
        <button onClick={onClickFilter} className={s.filter}>фильтр по лайкам</button>
    </div>
}
