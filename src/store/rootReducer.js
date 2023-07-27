import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice.js";
import colorReducer from "./colorSlice.js";
import goodsReducer from "./goodsSlice.js";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
});

export default rootReducer;
