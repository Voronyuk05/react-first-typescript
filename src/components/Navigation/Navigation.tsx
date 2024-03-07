import { ReactElement } from "react"
import { useModalMenu } from "../../hooks/useModalMenu"
import { Nav } from "./Navigation.styled"

interface INavProps {
    children: ReactElement
}

export const Navigation: React.FC<INavProps> = ({ children}): JSX.Element => {
    const {checked} = useModalMenu()

    return (
        <Nav checked={checked}>
            {children}
        </Nav>
    )
}