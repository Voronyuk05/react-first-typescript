import { useTypedSelector } from "./useTypedSelector"

export const useCalculation = () => {
    const {step, info, isSubmited} = useTypedSelector((state) => state.calcultaion)

    return {step, info, isSubmited}
}