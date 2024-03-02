
import { RightBar } from "./RightBar/RightBar";
import { CalculatorForm } from "./CalculatorForm/CalculatorForm";
import { CalculationComponent, CalculationContainer } from "./Calculation.styled";

export const Calculation: React.FC = (): JSX.Element => {

    return (
        <CalculationComponent>
            <CalculationContainer>
                <CalculatorForm />
                <RightBar />
            </CalculationContainer>
        </CalculationComponent>
    )
}