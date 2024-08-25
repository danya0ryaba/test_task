import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { Card } from '../card/Card'
import s from './container.module.scss'
import { Filter } from '../filter/Filter'

export const Container: React.FC = () => {

    const [filterValue, setFilterValue] = React.useState(false)

    let { posts } = useAppSelector(state => state.posts)

    if (filterValue) {
        posts = posts.filter(post => post.like)
    }

    const onClickFilter = () => {
        const eventLike = posts.find(post => post.like)
        if (eventLike) setFilterValue(!filterValue)
    }

    return <>
        <Filter onClickFilter={onClickFilter} />
        <ul className={s.container}>
            {posts.map(post => <Card {...post} key={post.id} />)}
        </ul>
    </>
}