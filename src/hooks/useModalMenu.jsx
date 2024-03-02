import { useSelector } from "react-redux"

export const useModalMenu = () => {
    const {checked} = useSelector((state) => state.modalMenu)
    return {checked}
}