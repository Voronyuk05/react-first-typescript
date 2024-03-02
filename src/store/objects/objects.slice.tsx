import { createSlice } from '@reduxjs/toolkit';

export const objectsSlice = createSlice({
    name: 'objects',
    initialState: {
        page: 1
    },
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