const {combineReducers} = require("redux");

import authReducer from "./authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
})