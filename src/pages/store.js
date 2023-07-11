// import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { api } from './api'

import customerSaga from 'src/views/custommer-dashboard/customerSaga'
import customerReducer from 'src/views/custommer-dashboard/customerSlice'

import loginReducer from './pages/login/loginSlice'
import loginSaga from './pages/login/loginSaga'

// registry reducer
const reducers = combineReducers({
  customer: customerReducer,
  login: loginReducer
})

// registry sagas
function* rootSaga() {
  yield all([customerSaga(), loginSaga()])
}

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['theme']
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// const allSagaMiddleWare = [];

const sagaMiddleware = createSagaMiddleware({})

// const enhancers = [];
// enhancers.push(applyMiddleware(...allSagaMiddleWare));
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(api.middleware)
    middlewares.push(sagaMiddleware)

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default
    // }
    // middlewares.push(createDebugger())
    return middlewares
  }
})

sagaMiddleware.run(rootSaga)
const persistor = persistStore(store)

// if (module.hot) {
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(createReducer(store.injectedReducers));
//   });
// };

setupListeners(store.dispatch)

export { store, persistor }
