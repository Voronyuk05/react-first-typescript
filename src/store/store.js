import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as advantagesReducer} from './advantages/advantages.slice'
import { reducer as objectsReducer } from './objects/objects.slice'
import { reducer as modalMenuActions } from './modalMenu/modalMenu.slice'
import { reducer as calcultaionActions } from './calculation/calculation.slice'
import { reducer as contactFormActions } from "./contactForm/contactForm.slice";
import { reducer as callFormActions} from './callForm/callForm.slice'
import { reducer as appActions } from "./app/app.slice";

const reducers = combineReducers({
    app: appActions,
    advantages: advantagesReducer,
    objects: objectsReducer,
    modalMenu: modalMenuActions,
    calcultaion: calcultaionActions,
    contactForm: contactFormActions,
    callForm: callFormActions
})

export const store  = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
