import { ReactElement } from "react"
import { Nav } from "./Navigation.styled"

interface INavProps {
    checked: boolean
    children: ReactElement
}

export const Navigation: React.FC<INavProps> = ({checked, children}): JSX.Element => {
    return (
        <Nav checked={checked}>
            {children}
        </Nav>
    )
}