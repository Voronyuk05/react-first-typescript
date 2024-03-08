import { createSlice } from '@reduxjs/toolkit';
import { IApp } from '../../types/app.types';


const initialState: IApp = {
    appPage: 'Main',
}

export const appSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {
        handleChangeAppPage: (state, value) => {
            state.appPage = value.payload
        },
    }
})

export const {handleChangeAppPage} = appSlice.actions
export const {actions, reducer} = appSlice