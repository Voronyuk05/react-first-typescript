import { useState } from "react";
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import { H2Small, HideButton, Input, H6, LightButton } from "../Global.styled";
import { ModalForm } from "../ModalForm/ModalForm";

interface IContactFormProps {
    modal: boolean
    setModal: Function
}

interface IData {
    name: string
    number: string
}

interface IPropsInput {
    name: string
    value: string
}

export const ContactForm: React.FC<IContactFormProps> = ({modal, setModal}): JSX.Element => {
    const [isSubmited, setIsSubmited] = useState<boolean>(false)
    const [data, setData] = useState<IData>({
        name: '',
        number: '',
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value}: IPropsInput = e.currentTarget
        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if (data.name !== '' && data.number !== '') {
            setIsSubmited(true)
        } else {
            alert({
                text: 'Вы не указали все данные!'
            });
        }
    }


    return (
        <ModalForm status={modal} handleSubmit={handleSubmit} isSubmited={isSubmited} setModal={setModal}>
            <>
                <HideButton onClick={() => setModal(false)} />
                <H2Small color="#8963A7" transform='uppercase' weight='700'>Заполните форму для связи</H2Small>
                <Input name="name" value={data.name} onChange={handleInputChange} placeholder="Имя" />
                <Input name="number" value={data.number} onChange={handleInputChange} placeholder="+ 7 (800) 000-00-00"/>
                <H6 color='primary' align='center' weight='400'>При отправке запроса Вы соглашаетесь с <H6 color="#1F5EFF" align='center' weight='400'>Политикой персональных данных</H6></H6>
                <LightButton type="submit">Отправить</LightButton>
            </>
        </ModalForm>
    )
}