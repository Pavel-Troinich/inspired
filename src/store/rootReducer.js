import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice.js";
import colorReducer from "./colorSlice.js";
import goodsReducer from "./goodsSlice.js";
import productReducer from "./productSlice.js";
import favoritesReducer from "./favoritesSlice.js";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
