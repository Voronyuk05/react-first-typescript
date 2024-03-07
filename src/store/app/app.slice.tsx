import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'contactForm',
    initialState: {
        appPage: 'Main',
    },
    reducers: {
        handleChangeAppPage: (state, value) => {
            state.appPage = value.payload
        },
    }
})

export const {handleChangeAppPage} = appSlice.actions
export const {actions, reducer} = appSlice