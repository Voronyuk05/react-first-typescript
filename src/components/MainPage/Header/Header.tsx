import { useModalMenu } from '../../../hooks/useModalMenu';
import { useActions } from '../../../hooks/useActions';
import { HeaderComponent, WrapperLogo, WrapperContacts, Contact, Burger } from './Header.styled'
import { Logo } from '../../Logo/Logo';
import { PrimaryButton, Container } from "../../Global.styled";
import { Navigation } from "../../Navigation/Navigation";
import { Link } from "../../Global.styled"


interface IHeaderProps  {
    changePage?: Function;
}

export const Header: React.FC<IHeaderProps> = ({changePage}): JSX.Element => {
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
                    <Navigation checked={checked} >
                        <>
                            <Burger {...checkedProps} onClick={() => handleSetChecked()}>
                                <span></span>
                            </Burger>
                            <Link onClick={() => changePage?.('Main')}>Главная</Link>
                            <Link onClick={() => changePage?.('AboutUs')}>О системе</Link>
                            <Link onClick={() => changePage?.('History')}>Монтаж</Link>
                            <Link onClick={() => changePage?.('History')}>Объекты</Link>
                            <Link onClick={() => changePage?.('History')}>Отзывы</Link>
                            <Link onClick={() => changePage?.('History')}>О компании</Link>
                            <Link onClick={() => changePage?.('History')}>Контакты</Link>
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