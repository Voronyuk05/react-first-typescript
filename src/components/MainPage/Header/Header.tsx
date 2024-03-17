import { useModalMenu } from '../../../hooks/useModalMenu';
import { useActions } from '../../../hooks/useActions';
import { HeaderComponent, WrapperLogo, WrapperContacts, Contact, Burger } from './Header.styled'
import { Logo } from '../../Logo/Logo';
import { PrimaryButton, Container } from "../../Global.styled";
import { Navigation } from "../../Navigation/Navigation";
import { Link } from "../../Global.styled"


export const Header: React.FC = (): JSX.Element => {
    const {checked} = useModalMenu()
    const {handleSetChecked} = useActions()

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
                            <Link href='/react-first-typescript/' >Главная</Link>
                            <Link href='/react-first-typescript/about'>О системе</Link>
                            <Link >Монтаж</Link>
                            <Link >Объекты</Link>
                            <Link >Отзывы</Link>
                            <Link >О компании</Link>
                            <Link >Контакты</Link>
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