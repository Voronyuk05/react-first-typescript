import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions as advantagesActions} from '../store/advantages/advantages.slice'
import { actions as objectsActions }  from '../store/objects/objects.slice'
import { actions as modalMenuActions } from '../store/modalMenu/modalMenu.slice'
import { actions as calculationActions } from '../store/calculation/calculation.slice'
import { actions as contactFormActions } from '../store/contactForm/contactForm.slice'
import { actions as callFormActions } from '../store/callForm/callForm.slice'
import { actions as appActions } from "../store/app/app.slice"

const rootActions = {
    ...advantagesActions,
    ...objectsActions,
    ...modalMenuActions,
    ...calculationActions,
    ...contactFormActions,
    ...callFormActions,
    ...appActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}