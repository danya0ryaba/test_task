import React, { MouseEvent } from 'react'
import { Post } from '../../App'
import s from './card.module.scss'
import { useAppDispatch } from '../../hooks/redux'
import { deletePost, likePost } from '../../store/posts-slise'
import { Link } from 'react-router-dom'

type ColorLike = '#ef6666' | '#b4b4b4'

export const Card: React.FC<Post> = ({ body, title, id, urlImage, ...rest }) => {

    const shortTitle = title.substring(0, 10)
    const shortTextBody = body.substring(0, 50)

    const colorLike: ColorLike = !rest.like ? '#b4b4b4' : '#ef6666'

    const dispatch = useAppDispatch()

    const onCloseHandler = (e: MouseEvent<SVGSVGElement>, id: number) => {
        dispatch(deletePost(id))
        e.preventDefault()
    }

    const onLikeHandler = (e: MouseEvent<SVGSVGElement>, id: number) => {
        dispatch(likePost(id))
        e.preventDefault()
    }

    return <li className={s.card__wrapper}>

        <Link to={`/post/${id}`} className={s.card}>

            <svg onClick={(e) => onCloseHandler(e, id)} fill='#9c0000' className={s.card__close} width="22" height="22" viewBox="0 0 30 30">
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>

            <div className={s.card__image}>
                <img src={`${urlImage ? urlImage : 'https://via.placeholder.com/300'}`} alt="изображение" />
            </div>

            <div className={s.card__content}>
                <h2 className={s.card__content_id}>{id}</h2>
                <h3 className={s.card__content_title}>{shortTitle}...</h3>
                <p className={s.card__content_body}>{shortTextBody}...</p>

                <svg onClick={(e) => onLikeHandler(e, id)} className={s.card__content_like} width={30} height={31} version="1.1" fill={colorLike} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" >
                    <path d="M11,24V14H5v12h6v-2.4l0,0c1.5,1.6,4.1,2.4,6.2,2.4h6.5c1.1,0,2.1-0.8,2.3-2l1.5-8.6c0.3-1.5-0.9-2.4-2.3-2.4 H20V6.4C20,5.1,18.7,4,17.4,4h0C16.1,4,15,5.1,15,6.4v0c0,1.6-0.5,3.1-1.4,4.4L11,13.8"></path>
                </svg>

            </div>

        </Link>

    </li>
}