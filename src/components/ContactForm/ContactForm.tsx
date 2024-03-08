import { useCallForm } from "../../hooks/useCallForm";
import { useActions } from "../../hooks/useActions";
import { H2Small, HideButton, Input, H6, LightButton } from "../Global.styled";
import { ModalForm } from "../ModalForm/ModalForm";


export const ContactForm: React.FC = (): JSX.Element => {
    const {callData, callModal} = useCallForm()
    const {handleCallInputChange, handleChangeCallModal, handleChangeModal} = useActions()


    return (
        <ModalForm status={callModal}>
            <>
                <HideButton onClick={() => {handleChangeCallModal(false); handleChangeModal(false)}} />
                <H2Small color="#8963A7" transform='uppercase' weight='700'>Заполните форму для связи</H2Small>
                <Input name="name" value={callData.name} onChange={handleCallInputChange} placeholder="Имя" />
                <Input name="number" value={callData.number} onChange={handleCallInputChange} placeholder="+ 7 (800) 000-00-00"/>
                <H6 color='primary' align='center' weight='400'>При отправке запроса Вы соглашаетесь с <H6 color="#1F5EFF" align='center' weight='400'>Политикой персональных данных</H6></H6>
                <LightButton type="submit">Отправить</LightButton>
            </>
        </ModalForm>
    )
}