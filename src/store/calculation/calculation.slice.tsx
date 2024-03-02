import { createSlice } from '@reduxjs/toolkit';
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

export const calculationSlice = createSlice({
    name: 'calculation',
    initialState: {
        step: 1,
        info: {},
        isSubmited: false
    },
    reducers: {
        handleChangeStep: (state, number) => {
            state.step += number.payload
        },
        handleChangeDate: (state, e) => {
            const {name, value} = e.payload.currentTarget
            
            state.info = {
                ...state.info,
                [name]: value
            }
        },

        handleSubmit: (state) => {
            if (Object.keys(state.info).length >= 6) {
                state.isSubmited = true
            } else {
                alert({
                    text: 'Вы не указали все данные!'
                });
            }
        }
    }
})

export const {handleChangeStep} = calculationSlice.actions
export const {reducer, actions} = calculationSlice