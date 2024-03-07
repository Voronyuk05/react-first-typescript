import { useSelector } from "react-redux"

export const useApp = () => {
    const {appPage} = useSelector((state) => state.app)
    return {appPage}
}