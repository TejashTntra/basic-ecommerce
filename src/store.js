import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import storage from 'redux-persist/es/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// import cartReducer from "./reducers/cartReducer";
// const store = createStore(
//   cartReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;




export default (initialState = {}) => {
  const persistConfig = {
    key: 'ecommerce',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persistor = persistStore(store);

  return { store, persistor };
};
