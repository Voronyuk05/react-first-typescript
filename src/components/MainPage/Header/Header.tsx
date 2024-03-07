import { useModalMenu } from '../../../hooks/useModalMenu';
import { useActions } from '../../../hooks/useActions';
import { HeaderComponent, WrapperLogo, WrapperContacts, Contact, Burger } from './Header.styled'
import { Logo } from '../../Logo/Logo';
import { PrimaryButton, Container } from "../../Global.styled";
import { Navigation } from "../../Navigation/Navigation";
import { Link } from "../../Global.styled"


export const Header: React.FC = (): JSX.Element => {
    const {checked} = useModalMenu()
    const {handleSetChecked, handleChangeAppPage} = useActions()

    const checkedProps = {
        checked: checked
    }
    
    return (
        <HeaderComponent>
            <Container>
                <WrapperLogo>
                    <Logo />
                    <Navigation >
                        <>
                            <Burger {...checkedProps} onClick={() => handleSetChecked()}>
                                <span></span>
                            </Burger>
                            <Link onClick={() => handleChangeAppPage('Main')}>Главная</Link>
                            <Link onClick={() => handleChangeAppPage('AboutUs')}>О системе</Link>
                            <Link onClick={() => handleChangeAppPage('History')}>Монтаж</Link>
                            <Link onClick={() => handleChangeAppPage('History')}>Объекты</Link>
                            <Link onClick={() => handleChangeAppPage('History')}>Отзывы</Link>
                            <Link onClick={() => handleChangeAppPage('History')}>О компании</Link>
                            <Link onClick={() => handleChangeAppPage('History')}>Контакты</Link>
                        </>
                    </Navigation>
                    <Burger {...checkedProps} onClick={() => handleSetChecked()}>
                    <span></span>
                    </Burger>
                </WrapperLogo>
                <WrapperContacts {...checkedProps}>
                    <Contact>8 (800) 700-80-40</Contact>
                    <PrimaryButton>
                        Заказать звонок
                    </PrimaryButton>
                </WrapperContacts>
            </Container>
        </HeaderComponent>
    )
}