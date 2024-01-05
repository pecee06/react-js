import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./appSlice";

export default configureStore({
    reducer: Reducer
});