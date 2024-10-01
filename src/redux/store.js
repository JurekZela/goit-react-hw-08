import { 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../redux/auth/slice';
import { contactsReducer } from './contacts/slice';
import filterReducer from './filters/slice';
 
const persistedAuthReducer = persistReducer({
  key: 'root',
  storage,
  whitelist: ['token']
}, authReducer)

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    })
    
    export const persistor = persistStore(store);