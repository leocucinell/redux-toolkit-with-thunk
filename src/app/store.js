import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "../features/postsSlice";

const store = configureStore({
    reducer:{
        posts: postsSlice
    }
});

export default store;