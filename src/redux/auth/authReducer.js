import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { signInError, signInRequest, signInSuccess, signOutError, signOutRequest, signOutSuccess, signUpError, signUpRequest, signUpSuccess } from "./authActions";

const token = createReducer("", {
    [signUpSuccess]: (_, action) => action.payload,
    [signInSuccess]: (_, action) => action.payload
});


const error = createReducer("", {
    [signUpError]: (_, action) => action.payload,
    [signInError]: (_, action) => action.payload,
    [signOutError]: (_, action) => action.payload,
});

const loader = createReducer(false, {
    [signUpRequest]: () => true,
    [signUpSuccess]: () => false,
    [signUpError]: () => false,
    [signInRequest]: () => true,
    [signInSuccess]: () => false,
    [signInError]: () => false,
    [signOutRequest]: () => true,
    [signOutSuccess]: () => false,
    [signOutError]: () => false,
})

export const authReducer = combineReducers({
    token,
    loader,
    error,
})