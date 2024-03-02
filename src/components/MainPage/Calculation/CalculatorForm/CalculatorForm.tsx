import { useCalculation } from "../../../../hooks/useCalculation";
import { CalculationMoving } from "../CalculationMoving/CalculationMoving";
import { FirstStep } from "../FirstStep/FirstStep";
import { SecondStep } from "../SecondStep/SecondStep";
import { ThirdStep } from "../ThirdStep/ThirdStep";
import { Content, CalculationNav, Way, Completed } from "./CalculatorForm.styled";
import { H2, H4Huge, FontDark } from "../../../Global.styled";

export interface IStepProps {
    handleChangeDate: Function
    info: IPropsInfo
}

export interface IPropsInfo {
    range?: string
    place?: string
    floor?: string
    room?: string
    plinth?: boolean
    coating?: string
    material?: string 
}


export const CalculatorForm: React.FC = (): JSX.Element => {
    const {step, isSubmited} = useCalculation()

    return (
        <Content>
            {isSubmited ? (
                <H2 color="primary" >Данные отправлено</H2>
            ) : (
                <>
                    <CalculationNav>
                        <H2 color="#7B5896" weight='500' align='center'>Калькулятор XL PIPE</H2>
                        <H4Huge color='primary' weight='400'><FontDark>Шаг {step}</FontDark> из 3</H4Huge>
                        <Way>
                            <Completed percent={step}/>
                        </Way>
                    </CalculationNav>

                    {step === 1 ? <FirstStep  /> : null}
                    {step === 2 ? <SecondStep  /> : null}
                    {step === 3 ? <ThirdStep  /> : null}
                    
                    <CalculationMoving />
                </>
            )}
        </Content>
    )
}