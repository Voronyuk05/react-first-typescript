import { useSelector } from "react-redux"

export const useCallForm = () => {
    const {isCallSubmited, callData, callModal} = useSelector((state) => state.callForm)
    return {isCallSubmited, callData, callModal}
}