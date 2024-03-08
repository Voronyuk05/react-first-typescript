import { useTypedSelector } from "./useTypedSelector"


export const useCallForm = () => {
    const {isCallSubmited, callData, callModal} = useTypedSelector((state) => state.callForm)
    return {isCallSubmited, callData, callModal}
}