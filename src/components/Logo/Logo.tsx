
import { LogoComponent } from './Logo.styled'
import LogoSvg from './Logo.svg';

export const Logo: React.FC = (): JSX.Element => {

    return (
        <LogoComponent onClick={() => {window.location.href = "/react-first-typescript/"}} src={LogoSvg} alt="" />
    )
}