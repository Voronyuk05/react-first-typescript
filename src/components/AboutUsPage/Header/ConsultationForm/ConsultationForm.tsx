import { useContactForm } from '../../../../hooks/useContactForm';
import { useCallForm } from '../../../../hooks/useCallForm';
import { useActions } from '../../../../hooks/useActions';
import { ModalForm } from '../../../ModalForm/ModalForm';
import { consultationData, IOptions, IConsultation } from "./СonsultationData";
import { ButtonBack, Arrow, WrapperOptions, OptionButton } from './ConsultationForm.styled'
import { H2Small, HideButton, Input, H6, Paragraph, ItemTitle, LightButton } from "../../../Global.styled";
import returnArrowIcon from '../../../../images/return-arrow.png'


export const ConsultationForm: React.FC = (): JSX.Element => {
    const {page, area, data, modal} = useContactForm()
    const {callData} = useCallForm()
    const {handleDataChange, handleChangePage, handleaAreaChange, handleCallInputChange, handleChangeModal} = useActions()

    
    return (
            <ModalForm status={modal}>
                <>
                    <HideButton onClick={() => handleChangeModal(false)} />
                    {page === consultationData.length ? (
                        <>
                            <HideButton onClick={() => handleChangeModal(false)} />
                            <H2Small color="#8963A7" transform='uppercase' weight='700'>Заполните форму для связи</H2Small>
                            <Input name="name" value={callData.name} onChange={handleCallInputChange} placeholder="Имя" />
                            <Input name="number" value={callData.number} onChange={handleCallInputChange} placeholder="+ 7 (800) 000-00-00"/>
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
                                                    <OptionButton key={value} type="button" name={name} width={width} height={height} data-call={call} value={value} option={data[name as keyof IOptions]} onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleDataChange({e, call})}>
                                                        {value}
                                                    </OptionButton>
                                                )
                                            } else if (type === 'input') {
                                                return (
                                                    <Input name={name} value={area} width={width} onChange={handleaAreaChange} placeholder={placeholder} />
                                                )
                                            } else if (type === 'send') {
                                                return (
                                                    <OptionButton type="button" name={name} width={width} value={area} option={data[name as keyof IOptions]} onClick={handleDataChange}>
                                                        {value}
                                                    </OptionButton>
                                                )
                                            }
                                            return null
                                        })}
                                    </WrapperOptions>
                                </>
                            ) : null
                        })
                    }
                    {page !== 0 ? (
                        <ButtonBack type='button' onClick={() => handleChangePage(-1)}>
                            <Arrow src={returnArrowIcon}/>
                            Назад
                        </ButtonBack>
                    ) : null}
                </>
            </ModalForm>
    )
}