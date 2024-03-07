import { ReactElement } from "react";
import { useCallForm } from "../../hooks/useCallForm";
import { useActions } from "../../hooks/useActions";
import { ModalFormComponent, ModalFormContainer } from "./ModalForm.styled";
import { H2Small, Paragraph, HideButton } from "../Global.styled";

interface IModalProps {
    children: ReactElement
    status: boolean
}

export const ModalForm: React.FC<IModalProps> = ({children, status}) => {
    const {isCallSubmited} = useCallForm()
    const {handleSubmit, handleChangeCallModal, handleChangeModal} = useActions()

    return status ?  (
        <ModalFormComponent>
            <ModalFormContainer onSubmit={handleSubmit}>
                {isCallSubmited ? (
                    <>
                        <HideButton onClick={() => {handleChangeCallModal(false); handleChangeModal(false)}}/>
                        <H2Small color="#8963A7" transform='uppercase' weight='700'>Ваша заявка принята</H2Small>
                        <Paragraph align='center' color="#433E3B">Специалист свяжется с вами в рабочее время</Paragraph>
                    </>
                ) : children }
            </ModalFormContainer>
        </ModalFormComponent>
    ) : null
}