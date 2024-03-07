import { useSelector } from "react-redux"

export const useContactForm = () => {
    const {modal, page, area, data} = useSelector((state) => state.contactForm)
    return { modal, page, area, data}
}