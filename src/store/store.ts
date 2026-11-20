import { configureStore } from '@reduxjs/toolkit'
import trainsSearchResultsReducer from './slices/searchResultsSlice'

export const store = configureStore({
    reducer: {
        trainsSearchResults: trainsSearchResultsReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch