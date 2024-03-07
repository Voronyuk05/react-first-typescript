import { createSlice } from "@reduxjs/toolkit";

export const callFormSlice = createSlice({
    name: 'callForm',
    initialState: {
        isCallSubmited: false, 
        callData: {       
            name: '',
            number: '',
        },
        callModal: false,
    },
    reducers: {
        handleCallSubmit: (state, e) => {
            e.payload.preventDefault()
            if (state.callData.name !== '' && state.callData.number !== '') {
                state.isCallSubmited = true
            } else {
                alert({
                    text: 'Вы не указали все данные!'
                });
            }
        },

        handleCallInputChange: (state, e) => {
            const {name, value} = e.payload.currentTarget
            state.callData = {
                ...state.callData,
                [name]: value
            }
        },

        handleChangeCallModal: (state, value) => {
            state.callModal = value.payload
        },
    },
})

export const {handleCallSubmit, handleCallInputChange, handleChangeCallModal} = callFormSlice.actions
export const {actions, reducer} = callFormSlice