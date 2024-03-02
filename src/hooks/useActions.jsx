import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions as advantagesActions} from '../store/advantages/advantages.slice'
import { actions as objectsActions }  from '../store/objects/objects.slice'
import { actions as modalMenuActions } from '../store/modalMenu/modalMenu.slice'
import { actions as calculationActions } from '../store/calculation/calculation.slice'

const rootActions = {
    ...advantagesActions,
    ...objectsActions,
    ...modalMenuActions,
    ...calculationActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}