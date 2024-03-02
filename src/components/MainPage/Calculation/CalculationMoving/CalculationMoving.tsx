import { memo } from "react";
import { useCalculation } from "../../../../hooks/useCalculation";
import { useActions } from "../../../../hooks/useActions";
import { Moving } from "./CalculationMoving.styled"
import { PrimaryButtonP, GrayButton } from "../../../Global.styled";


export const CalculationMoving: React.FC = memo((): JSX.Element => {
    const {step} = useCalculation()
    const {handleChangeStep, handleSubmit} = useActions()

    return (
        <Moving>
            {step !== 1 ? (
                <GrayButton onClick={() => handleChangeStep(-1)}>
                    Шаг {step - 1} 
                </GrayButton>
            ) : <i></i>}

            {step === 3 ? (
                <PrimaryButtonP onClick={handleSubmit}>
                    Получить расчет
                </PrimaryButtonP>
            ) : (
                <PrimaryButtonP onClick={() => handleChangeStep(+1)}>
                    Шаг {step + 1} 
                </PrimaryButtonP>
            )}
        </Moving>
    )
})