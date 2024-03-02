import { createSlice } from '@reduxjs/toolkit';

export const modalMenuSlice = createSlice({
    name: 'modalMenu',
    initialState: {
        checked: false 
    },
    reducers: {
        handleSetChecked: (state) => {
            state.checked = !state.checked
        }
    }
})

export const {handleSetChecked} = modalMenuSlice.actions
export const {actions, reducer} = modalMenuSlice