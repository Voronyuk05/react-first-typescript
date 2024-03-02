import { useState } from "react";
import { HeaderComponent, WrapperLogo, Button, LogoText, Container } from './Header.styled'
import { Logo } from '../../Logo/Logo';
import { ConsultationForm } from "./ConsultationForm/ConsultationForm";

interface IHeaderProps {
    changePage: Function;
}

export const Header: React.FC<IHeaderProps> = ({changePage}): JSX.Element => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <HeaderComponent>
            <Container>
                <WrapperLogo>
                    <Logo changePage={changePage}/>
                    <LogoText>
                        Электро-водяное отопление от производителя
                    </LogoText>
                </WrapperLogo>
                <Button onClick={() => setModal(true)}>
                    Заказать консультацию
                </Button>
                <ConsultationForm modal={modal} setModal={setModal} />
            </Container>
        </HeaderComponent>
    )
}