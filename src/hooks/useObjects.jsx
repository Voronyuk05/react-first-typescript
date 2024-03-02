import { useSelector } from "react-redux"

export const useObjects = () => {
    const {page}  = useSelector((state) => state.objects)  
    return {page}
}