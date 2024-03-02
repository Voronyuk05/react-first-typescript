import { ITermoregulationList } from '../TermoregulationData'
import { List } from "./TimesList.styled";
import { TimesItem } from "../TimesItem/TimesItem";

export const TimesList: React.FC<ITermoregulationList> = ({termoregulationData}) => {
    return (
        <List>
            {termoregulationData.map(({time, text, degrees, eclipse, backgroung, type}) => (
                <TimesItem 
                key={time}
                time={time} 
                text={text} 
                degrees={degrees} 
                eclipse={eclipse}
                backgroung={backgroung}
                type={type} />
            ))}
        </List>
    )
}