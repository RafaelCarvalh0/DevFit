import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import thunk from 'redux-thunk';

import { reducers } from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconcilier: hardSet
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

let persistor = persistStore(store);

export { store, persistor };