import { useActions } from '../../../hooks/useActions';
import { HeaderComponent, WrapperLogo, Button, LogoText, Container } from './Header.styled'
import { Logo } from '../../Logo/Logo';
import { ConsultationForm } from "./ConsultationForm/ConsultationForm";


export const Header: React.FC= (): JSX.Element => {
    const {handleChangeModal} = useActions()

    return (
        <HeaderComponent>
            <Container>
                <WrapperLogo>
                    <Logo />
                    <LogoText>
                        Электро-водяное отопление от производителя
                    </LogoText>
                </WrapperLogo>
                <Button onClick={() => handleChangeModal(true)}>
                    Заказать консультацию
                </Button>
                <ConsultationForm  />
            </Container>
        </HeaderComponent>
    )
}