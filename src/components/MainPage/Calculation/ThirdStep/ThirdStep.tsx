import { useState } from "react"
import { useCalculation } from "../../../../hooks/useCalculation";
import { useActions } from "../../../../hooks/useActions";
import { materialData, coatingData } from "./ThirdStepData"
import { Radio, H3Small, ItemTitle } from "../../../Global.styled"
import { StepsForm, LabelObjects, WrapperObject, WrapperInputs } from "../CalculatorForm/CalculatorForm.styled"

export const ThirdStep: React.FC= (): JSX.Element => {
    const {info} = useCalculation()
    const {handleChangeDate} = useActions()
    const [coating, setСoating] = useState(info.coating)
    const [material, setMaterial] = useState(info.material)

    function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.name === 'coating') {
            setСoating(e.currentTarget.value)
        } else if (e.currentTarget.name === 'material') {
            setMaterial(e.currentTarget.value)
        }
        handleChangeDate(e)
    }


    return (
        <StepsForm action="">
            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Основное напольное покрытие:</ItemTitle>
                <WrapperInputs>
                    {coatingData.map(({text}, index) => (
                        <WrapperObject key={index}>
                            <Radio name="coating" type="radio" value={text} onChange={handleRadioChange} checked={coating === text}/>
                            <H3Small weight='300' color='primary'>{text}</H3Small>
                        </WrapperObject>
                    ))}
                </WrapperInputs>
            </LabelObjects>

            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Материал стен помещения:</ItemTitle>
                <WrapperInputs >
                    {materialData.map(({text}, index) => (
                        <WrapperObject key={index}>
                            <Radio name="material" type="radio" value={text} onChange={handleRadioChange} checked={material === text}/>
                            <H3Small weight='300' color='primary'>{text}</H3Small>
                        </WrapperObject>
                    ))}
                </WrapperInputs>
            </LabelObjects>
        </StepsForm>
    )
}