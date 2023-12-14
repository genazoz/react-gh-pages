import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {postApi} from "../entities/post/api/postApi.ts";

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']