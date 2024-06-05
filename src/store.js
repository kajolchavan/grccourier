import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducer/userReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



const persistConfig = {
  key: 'grcEcom',
  storage,
}
const reducer = combineReducers({
 user:userReducer,

});
const persistedReducer = persistReducer(persistConfig, reducer)



let initialState = {
//   cart:{
//     cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   }
};

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)
