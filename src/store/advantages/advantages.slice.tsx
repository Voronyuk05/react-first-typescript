import { createSlice } from "@reduxjs/toolkit";
import {IAdvantagesSlice} from '../../types/advantages.types'

const initialState: IAdvantagesSlice = {
    section: 'Экономия электроэнергии' 
}

export const advantagesSlice = createSlice({
    name: 'advantages',
    initialState,
    reducers: {
        handleChangeSection: (state, category) => {
            state.section = category.payload
        },
    }
})


export const {handleChangeSection} = advantagesSlice.actions
export const {actions, reducer} = advantagesSlice
