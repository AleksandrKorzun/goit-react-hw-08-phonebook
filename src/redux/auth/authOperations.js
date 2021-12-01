import axios from "axios"
import { signInSuccess, signUpError, signUpRequest, signUpSuccess } from "./authActions"

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const signUpOperation = (user) => async (dispatch, getState) => {
    dispatch(signUpRequest())
    try {
        const response = await axios.post('/users/signup', user)
       dispatch(signUpSuccess(response.data.token)) 
    } catch (error) {
        dispatch(signUpError(error.message))
    }
}

export {signUpOperation}