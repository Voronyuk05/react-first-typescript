import { useSelector } from "react-redux";

export const useSection = () => {
    const {section} = useSelector(state => state.advantages)
    return {section}
}