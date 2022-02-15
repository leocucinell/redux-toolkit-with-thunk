import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* ASYNC FUNCTIONS: Exported here, attached in slice */
export const getPosts = createAsyncThunk(
    'retrieve/posts',
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const formatedRes = await response.json();
        return formatedRes;
    }
)

/* SLICE */
export const postsSlice = createSlice({
    name: "posts",
    initialState: {value: {
        posts: [],
        isLoading: true
    }},
    reducers:{
        addPost: (state, action) => {
            state.value.posts.push({
                userId: "TEMP_USER",
                id: "UUID VALUE",
                title: action.payload.title,
                body: action.payload.body
            });
        }
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.value.isLoading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.value.posts = action.payload;
            state.value.isLoading = false
        },
        [getPosts.rejected]: (state) => {
            state.value.isLoading = true
        }
    }
});

export const { addPost } = postsSlice.actions
export default postsSlice.reducer