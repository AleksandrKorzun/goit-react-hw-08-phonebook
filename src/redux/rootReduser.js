import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import contactsReducer from "./contacts/contactsReduser";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer,
})
export default rootReducer;