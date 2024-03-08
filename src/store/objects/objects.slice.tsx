import { createSlice } from '@reduxjs/toolkit';
import { IObjectSlice } from '../../types/objects.types';

const initialState: IObjectSlice = {
    page: 1
}

export const objectsSlice = createSlice({
    name: 'objects',
    initialState,
    reducers: {
        handleIncreasePage: (state) => {
            state.page += 1
        },

        handleDecreasePage: (state) => {
            state.page = 1
        }
    }
})

export const {handleIncreasePage, handleDecreasePage} = objectsSlice.actions
export const {actions, reducer} = objectsSlice