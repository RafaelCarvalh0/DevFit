import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from 'redux-thunk';

import Reducers from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer']
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

let persistor = persistStore(store);

export { store, persistor };