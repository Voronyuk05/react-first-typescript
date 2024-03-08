import { useTypedSelector } from "./useTypedSelector"

export const useApp = () => {
    const {appPage} = useTypedSelector((state) => state.app)
    return {appPage}
}