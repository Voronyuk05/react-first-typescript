import { useState } from "react"
import { useCalculation } from "../../../../hooks/useCalculation";
import { useActions } from "../../../../hooks/useActions";
import { floorsData, roomsData } from "./SecondStepData"
import { Radio, H3Small, ItemTitle, Checkbox } from "../../../Global.styled"
import { StepsForm, LabelObjects, WrapperObject, WrapperInputs } from "../CalculatorForm/CalculatorForm.styled"

export const SecondStep: React.FC = (): JSX.Element => {
    const {info} = useCalculation()
    const {handleChangeDate} = useActions()
    const [floor, setFloor] = useState(info.floor)
    const [room, setRoom] = useState(info.room)
    const [plinth, setPlinth] = useState(info.plinth)

    function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.name === 'floor') {
            setFloor(e.currentTarget.value)
        } else if (e.currentTarget.name === 'room') {
            setRoom(e.currentTarget.value)
        } else if (e.currentTarget.name === 'plinth') {
            setPlinth(!plinth)
            handleChangeDate(e)
            return
        }
        handleChangeDate(e)
    }


    return (
        <StepsForm action="">
            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Основное напольное покрытие:</ItemTitle>
                <WrapperInputs>
                    {floorsData.map(({text}) => (
                        <WrapperObject key={text}>
                            <Radio name="floor" type="radio" value={text} onChange={handleRadioChange} checked={floor === text}/>
                            <H3Small weight='300' color='primary'>{text}</H3Small>
                        </WrapperObject>
                    ))}
                    <WrapperObject>
                        <Checkbox name="plinth" type="radio" value={plinth}  onClick={handleRadioChange} checked={plinth === true}/>
                        <H3Small weight='300' color='primary'>+ цоколь</H3Small>
                    </WrapperObject>
                </WrapperInputs>
            </LabelObjects>

            <LabelObjects direction='column'>
                <ItemTitle weight='300' color="#000">Кол-во комнат:</ItemTitle>
                <WrapperInputs >
                    {roomsData.map(({number}) => (
                        <WrapperObject key={number}>
                            <Radio name="room" type="radio" value={number} onChange={handleRadioChange} checked={room === number}/>
                            <H3Small weight='300' color='primary'>{number}</H3Small>
                        </WrapperObject>
                    ))}
                </WrapperInputs>
            </LabelObjects>
        </StepsForm>
    )
}