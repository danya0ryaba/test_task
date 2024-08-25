import React from 'react'
import { getPosts } from './store/posts-slise'
import { useAppDispatch } from './hooks/redux'
import { Container } from './components/container/Container'
import { Route, Routes } from 'react-router-dom'
import { Post } from './pages/Post'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
  urlImage?: string
  like?: boolean
}

function App() {

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getPosts())
  })

  return (
    <>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='post/:id' element={<Post />} />
        <Route path='*' element={<h2>ОШИБКА</h2>} />
      </Routes>
    </>
  )
}

export default App
