import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {roomReducer} from "./components/reducer";

const rootReducer = combineReducers({
    room: roomReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});
