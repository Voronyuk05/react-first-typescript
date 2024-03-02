import { LogoComponent } from './Logo.styled'
import LogoSvg from './Logo.svg';

interface ILogoProps  {
    changePage?: Function;
}

export const Logo: React.FC<ILogoProps> = ({changePage}): JSX.Element => {
    return (
        <LogoComponent onClick={() => changePage?.('Main')} src={LogoSvg} alt="" />
    )
}