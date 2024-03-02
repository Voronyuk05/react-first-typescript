import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import { List } from "./StatisticsList.styled";
import { IStatisticList } from '../StatisticsData'

export const StatisticsList: React.FC<IStatisticList> = ({statisticsData}): JSX.Element => {
    return (
        <List>
            {statisticsData.map(({stats,measure, text, img}) => (
                <StatisticsItem key={stats} stats={stats} measure={measure} text={text} img={img} />
            ))}
        </List>
    )
}