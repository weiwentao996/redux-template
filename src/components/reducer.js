import {createAction, createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import {getMessageListApi} from "./api";


const initialState = {
    loginStatus: false,
    messageList: [],
}

export const refreshMessageAction = createAsyncThunk('room/refresh', getMessageListApi)
export const cleanScreenAction = createAction('room/cleanScreen')



export const roomReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(refreshMessageAction.fulfilled, (state, action) => {
            console.log(action)
            state.messageList = state.messageList.concat(action.payload)
            state.loading = false
        })
        .addCase(cleanScreenAction, (state, action) => {
            state.messageList = []
        })
})