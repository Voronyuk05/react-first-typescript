import { useTypedSelector } from "./useTypedSelector"

export const useSection = () => {
    const {section} = useTypedSelector(state => state.advantages)
    return {section}
}