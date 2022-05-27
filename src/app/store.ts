import {configureStore} from "@reduxjs/toolkit";

import imagesReducer from "../features/images/imagesSlice";

export const store = configureStore({
    reducer:{
        images:imagesReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch