import { Post } from './../App';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface initialStateAnime {
    posts: Post[]
    isLoading: boolean
    error: null | string
    activeFilter: boolean
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue }) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9&_page=1');
        if (response.status === 200) return response.json()
        else return rejectWithValue("Server Error!")
    }
)

const initialState: initialStateAnime = {
    posts: [],
    isLoading: false,
    error: null,
    activeFilter: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        likePost: (state, { payload }) => {
            state.posts = state.posts.map(post => post.id === payload ? { ...post, like: !post.like } : post)
        },
        deletePost: (state, { payload }) => {
            state.posts = state.posts.filter(post => post.id !== payload)
        },
        filteringByLikes: (state, { payload }) => {
            state.activeFilter = !payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, { payload }) => {
                state.posts = payload.map((item: Post) => ({
                    ...item,
                    urlImage: 'https://via.placeholder.com/300',
                    like: false,
                }))
                state.isLoading = false
            })
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getPosts.rejected, (state) => {
                state.isLoading = true
                state.error = null
            })
    }

})


export const { likePost, deletePost, filteringByLikes } = postsSlice.actions
export default postsSlice.reducer