import {combineReducers, createStore} from "redux";
import lessonReducer from "./lesson-reducer";
import HWReducer from "./HW-reducer";


let reducers = combineReducers({
    NLLP : lessonReducer,
    HPL: HWReducer
});

let store = createStore(reducers);

export default store;