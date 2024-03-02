import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as advantagesReducer} from './advantages/advantages.slice'
import { reducer as objectsReducer } from './objects/objects.slice'
import { reducer as modalMenuActions } from './modalMenu/modalMenu.slice'
import { reducer as calcultaionActions } from './calculation/calculation.slice'

const reducers = combineReducers({
    advantages: advantagesReducer,
    objects: objectsReducer,
    modalMenu: modalMenuActions,
    calcultaion: calcultaionActions
})

export const store  = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
