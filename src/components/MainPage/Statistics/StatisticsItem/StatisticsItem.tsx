import { Item, Text, EclipseImg, SubText } from "./StatisticsItem.styled";
import { H2Huge, Paragraph } from "../../../Global.styled";
import { IStatistic } from '../StatisticsData'

export const  StatisticsItem: React.FC<IStatistic> = ({stats, measure, text, img}): JSX.Element => {
    return (
        <Item>
            <EclipseImg src={img} />
            <Text>
                <H2Huge weight='700' align='start' color='white'>{stats} <SubText>{measure}</SubText></H2Huge>
                <Paragraph weight='300' color="white" >
                    {text}
                </Paragraph>
            </Text>
        </Item>
    )
}