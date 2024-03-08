import { createSlice } from '@reduxjs/toolkit';
import { consultationData } from '../../components/AboutUsPage/Header/ConsultationForm/СonsultationData';
import { IContactForm } from '../../types/contactForm.types';

const initialState: IContactForm = {
    data: {},
    modal: false,
    page: 0,
    area: '',
}

export const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {
        handleaAreaChange: (state, e) => {
            state.area = e.payload.currentTarget.value
        },

        handleDataChange: (state, e) => {
            const {value, name} = e.payload.e.currentTarget
            
            state.data = {
                ...state.data,
                [name]: value
            }
            e.payload.call ? state.page = consultationData.length : state.page  += 1
        },


        handleChangeModal: (state, value) => {
            state.modal = value.payload
        },


        handleChangeArea: (state, value) => {
            state.area = value.payload
        },

        handleChangePage: (state, value) => {
            state.page += value.payload
        }

    }
})

export const {handleChangeModal, handleChangeArea, handleChangePage, handleaAreaChange, handleDataChange} = contactFormSlice.actions
export const {actions, reducer} = contactFormSlice