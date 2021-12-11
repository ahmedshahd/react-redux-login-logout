import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    composeWithDevTools,
})
