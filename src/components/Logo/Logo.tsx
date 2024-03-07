import { useActions } from '../../hooks/useActions';
import { LogoComponent } from './Logo.styled'
import LogoSvg from './Logo.svg';

export const Logo: React.FC = (): JSX.Element => {
    const {handleChangeAppPage} = useActions()

    return (
        <LogoComponent onClick={() => handleChangeAppPage('Main')} src={LogoSvg} alt="" />
    )
}