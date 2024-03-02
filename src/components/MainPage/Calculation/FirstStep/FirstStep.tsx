import { memo, useState } from "react"
import { useCalculation } from "../../../../hooks/useCalculation";
import { useActions } from "../../../../hooks/useActions";
import { placesData } from "./PlacesData"
import { RadioObjects, H3Small, ItemTitle, InputRange } from "../../../Global.styled"
import { StepsForm, LabelObjects, WrapperObject, InputMeters } from "../CalculatorForm/CalculatorForm.styled"

export const FirstStep: React.FC = memo((): JSX.Element => {
    const {info} = useCalculation()
    const {handleChangeDate} = useActions()
    const [range, setRange] = useState(info.range)
    const [place, setPlace] = useState(info.place)

    function handleRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRange(e.currentTarget.value)
        handleChangeDate(e)
    }

    function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPlace(e.currentTarget.value)
        handleChangeDate(e)
    }


    return (
        <StepsForm action="">
            <LabelObjects items='center'>
                <ItemTitle weight='300' color="#000">Объект: </ItemTitle>
                {placesData.map(({img, text}, index) => (
                    <WrapperObject direction='column' key={index}>
                        <RadioObjects name="place" type="radio" value={text} onChange={handleRadioChange} bg={img} checked={place === text} />
                        <H3Small color='primary' weight='300' align='center'>{text}</H3Small>
                    </WrapperObject>
                ))}
            </LabelObjects>
            <LabelObjects items='center'>
                <ItemTitle weight='300' color="#000">Общая площадь помещения: </ItemTitle>
                <InputRange type="range" name="range" onChange={handleRangeChange} value={range} min={1} max={100} />
                <InputMeters type="text" name="range"  value={range} onChange={handleRangeChange} />
                <H3Small weight='300' color="primary">м2</H3Small>
            </LabelObjects>
        </StepsForm>
    )
})