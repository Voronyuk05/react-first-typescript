import { useTypedSelector } from "./useTypedSelector"

export const useContactForm = () => {
    const {modal, page, area, data} = useTypedSelector((state) => state.contactForm)
    return { modal, page, area, data}
}