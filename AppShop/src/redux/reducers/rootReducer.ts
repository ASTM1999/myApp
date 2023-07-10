import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducers from "./todoReducers";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducers
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>