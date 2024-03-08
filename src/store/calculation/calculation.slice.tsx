import { createSlice } from '@reduxjs/toolkit';
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import { ICalculation } from '../../types/calculation.types';

const initialState: ICalculation = {
    step: 1,
    info: {
        range: '',
        place: '',
        floor: '',
        room: '',
        coating: '',
        material: '',
    },
    isSubmited: false
}

export const calculationSlice = createSlice({
    name: 'calculation',
    initialState,
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
            if (Object.values(state.info).every(item => item !== '')) {
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