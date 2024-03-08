import { useTypedSelector } from "./useTypedSelector"

export const useModalMenu = () => {
    const {checked} = useTypedSelector((state) => state.modalMenu)
    return {checked}
}