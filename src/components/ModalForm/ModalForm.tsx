import { ReactElement } from "react";
import { ModalFormComponent, ModalFormContainer } from "./ModalForm.styled";
import { H2Small, Paragraph, HideButton } from "../Global.styled";

interface IModalProps {
    children: ReactElement
    status: boolean
    handleSubmit: Function
    isSubmited: boolean
    setModal: Function
}

export const ModalForm: React.FC<IModalProps> = ({children, status, handleSubmit, isSubmited, setModal}) => {
    return status ?  (
        <ModalFormComponent>
            <ModalFormContainer onSubmit={handleSubmit}>
                {isSubmited ? (
                    <>
                        <HideButton onClick={() => setModal(false)}/>
                        <H2Small color="#8963A7" transform='uppercase' weight='700'>Ваша заявка принята</H2Small>
                        <Paragraph align='center' color="#433E3B">Специалист свяжется с вами в рабочее время</Paragraph>
                    </>
                ) : children }
            </ModalFormContainer>
        </ModalFormComponent>
    ) : null
}