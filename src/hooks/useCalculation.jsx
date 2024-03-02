import { useSelector } from "react-redux"

export const useCalculation = () => {
    const {step, info, isSubmited} = useSelector((state) => state.calcultaion)

    return {step, info, isSubmited}
}