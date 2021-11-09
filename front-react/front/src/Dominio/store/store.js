import { createStore,combineReducers } from "redux";
import { ProductoReducer } from "../reducer/ProductoReducer";

const reducer = combineReducers({
   product:ProductoReducer
})


export const store = createStore(ProductoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());