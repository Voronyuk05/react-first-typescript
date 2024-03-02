import { createSlice } from "@reduxjs/toolkit";

export const advantagesSlice = createSlice({
    name: 'advantages',
    initialState: {
        section: 'Экономия электроэнергии'
    },
    reducers: {
        handleChangeSection: (state, category) => {
            state.section = category.payload
        },
    }
})


export const {handleChangeSection} = advantagesSlice.actions
export const {actions, reducer} = advantagesSlice
