import { createSlice } from "@reduxjs/toolkit"
import {trainsSearchResults} from "../data/trainsSearchResults.ts";
import type { Train } from "../../types/trainsTypes"

interface TrainsState {
    trains: Train[],
    loading: boolean,
    error: null | string
}

const initialState: TrainsState = {
    trains: trainsSearchResults,
    loading: false,
    error: null
}

const trainsSearchResultsSlice = createSlice({
    name: "trainsSearchResults",
    initialState,
    reducers: {},
})

export default trainsSearchResultsSlice.reducer
