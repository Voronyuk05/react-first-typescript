import { ITermolegulation } from '../TermoregulationData'
import { Text, Item,Info, EclipseImg, Degrees } from "./TimesItem.styled";
import { H3, ParagraphDark } from "../../../Global.styled";

export const TimesItem: React.FC<ITermolegulation> = ({time, text, degrees, eclipse, backgroung, type}) => {
    return (
        <Item bgImg={backgroung} type={type}>
            <Text>
                <H3  weight='500' color='primary'  align='start' >{time}</H3>
                <ParagraphDark>{text}</ParagraphDark>
            </Text>
            <Info>
                <EclipseImg src={eclipse} />
                <Degrees>{degrees}</Degrees>
            </Info>
        </Item>
    )
}