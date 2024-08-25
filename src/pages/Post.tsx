import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import s from './post.module.scss'

export const Post: React.FC = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const onClickBack = () => navigate(-1)

    const { posts } = useAppSelector(state => state.posts)

    const post = posts.find(p => p.id === Number(id))

    return <main className={s.post}>
        <button onClick={onClickBack} className={s.post__arrow}>← вернуться к списку карточек</button>
        <h2 className={s.post__title}>{post?.title}</h2>
        <div className={s.post__image}>
            <img src={`${post?.urlImage}`} alt="картинка" />
        </div>
        <span className={s.post__id}>{post?.id}</span>
        <p className={s.post__body}>{post?.body}</p>
    </main>

}