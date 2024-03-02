import { useState } from "react";
import { alert} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import { ModalForm } from '../../../ModalForm/ModalForm';
import { consultationData, IOptions, IConsultation } from "./СonsultationData";
import { ButtonBack, Arrow, WrapperOptions, OptionButton } from './ConsultationForm.styled'
import { H2Small, HideButton, Input, H6, Paragraph, ItemTitle, LightButton } from "../../../Global.styled";
import returnArrowIcon from '../../../../images/return-arrow.png'

export interface IConsultationPorps {
    modal: boolean
    setModal: Function
}

export interface ICallData {
    name: string
    number: string
}

export const ConsultationForm: React.FC<IConsultationPorps> = ({modal, setModal}): JSX.Element => {
    const [isSubmited, setIsSubmited] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)
    const [data, setData] = useState<IOptions>({
        type: '',
    })
    const [callData, setCallData] = useState<ICallData>({
        name: '',
        number: ''
    })
    const [area, setArea] = useState<string>('')

    function handleDataChange(name: string, value?: string, call?: boolean) {
        setData({
            ...data,
            [name]: value
        })
        call ? setPage(consultationData.length) : setPage(n => n + 1)
    }

    function handleInputChange(e:  React.ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.name === 'area') {
            setArea(e.currentTarget.value)
        } else {
            setCallData({
                ...callData,
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    }

    function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if (callData.name !== undefined && callData.number !== undefined && callData.name !== '' && callData.number !== '') {
            setIsSubmited(true)
        } else {
            alert({
                text: 'Вы не указали все данные!'
            });
        }
    }
    
    return (
            <ModalForm status={modal} setModal={setModal} isSubmited={isSubmited} handleSubmit={handleSubmit}>
                <>
                    <HideButton onClick={() => setModal(false)} />
                    {page === consultationData.length ? (
                        <>
                            <HideButton onClick={() => setModal(false)} />
                            <H2Small color="#8963A7" transform='uppercase' weight='700'>Заполните форму для связи</H2Small>
                            <Input name="name" value={callData.name} onChange={handleInputChange} placeholder="Имя" />
                            <Input name="number" value={callData.number} onChange={handleInputChange} placeholder="+ 7 (800) 000-00-00"/>
                            <H6 color='primary' align='center' weight='400'>При отправке запроса Вы соглашаетесь с <H6 color="#1F5EFF" align='center' weight='400'>Политикой персональных данных</H6></H6>
                            <LightButton type="submit">Отправить</LightButton>
                        </>
                    ) : consultationData.map(({name, title, paragraph, direction, options}: IConsultation, index) => {
                            
                            return page === index ? (
                                <>
                                    <H2Small color="#8963A7" transform='uppercase' weight='700'>{title}</H2Small>
                                    {paragraph ? (
                                        <Paragraph align='center' weight='600' color='primary'>{paragraph}</Paragraph>
                                    ) : null}
                                    {direction ? (
                                            <ItemTitle align='center' weight='700' color='primary'>{direction}</ItemTitle>
                                    ) : null}
                                    <WrapperOptions>
                                        {options.map(({type, width, height, placeholder, value, call}: IOptions) => {
                                            if (type === 'button') {
                                                return (
                                                    <OptionButton type="button" width={width} height={height} value={data[name as keyof IOptions]} option={value} onClick={() => handleDataChange(name, value, call)}>
                                                        {value}
                                                    </OptionButton>
                                                )
                                            } else if (type === 'input') {
                                                return (
                                                    <Input name={name} value={area} width={width} onChange={handleInputChange} placeholder={placeholder} />
                                                )
                                            } else if (type === 'send') {
                                                return (
                                                    <OptionButton type="button" width={width} onClick={() => handleDataChange(name, area)}>
                                                        {value}
                                                    </OptionButton>
                                                )
                                            }
                                        })}
                                    </WrapperOptions>
                                </>
                            ) : null
                        })
                    }
                    {page !== 0 ? (
                        <ButtonBack type='button' onClick={() => setPage(n => n - 1)}>
                            <Arrow src={returnArrowIcon}/>
                            Назад
                        </ButtonBack>
                    ) : null}
                </>
            </ModalForm>
    )
}