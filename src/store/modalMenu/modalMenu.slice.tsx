import { createSlice } from '@reduxjs/toolkit';
import { IModalForm } from '../../types/modalForm';

const initialState: IModalForm = {
    checked: false 
}

export const modalMenuSlice = createSlice({
    name: 'modalMenu',
    initialState,
    reducers: {
        handleSetChecked: (state) => {
            state.checked = !state.checked
        }
    }
})

export const {handleSetChecked} = modalMenuSlice.actions
export const {actions, reducer} = modalMenuSlice