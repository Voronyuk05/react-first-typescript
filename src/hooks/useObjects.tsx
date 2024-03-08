import { useTypedSelector } from "./useTypedSelector"


export const useObjects = () => {
    const {page}  = useTypedSelector((state) => state.objects)  
    return {page}
}