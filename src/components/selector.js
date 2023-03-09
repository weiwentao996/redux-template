import {createSelector} from "@reduxjs/toolkit";

const selectAuth = state => state.room

export const selectMessageList = createSelector(selectAuth, rootState => rootState.messageList)
export const selectLoginStatus = createSelector(selectAuth, rootState => rootState.loginStatus)