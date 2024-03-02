import { IStepList} from '../StepsData'
import { StepsItem } from "../StepItem/StepItem";
import { List } from "./StepsList.styled";

export const StepsList: React.FC<IStepList> = ({stepsData}): JSX.Element => {
    return (
        <List>
            {stepsData.map(({img, title, text, button}) => (
                <StepsItem key={title} img={img} title={title} text={text} button={button}/>
            ))}
        </List>
    )
}