import {  Card, CardImg, Text } from "./CardItem.styled";
import { H3, H4Huge } from "../../../Global.styled";

interface ICardProps {
    title: string
    text: string
    img: string
}

export const CardItem: React.FC<ICardProps> = ({title, text, img}) => {
    return (
        <>
            <Card>
                <Text>
                    <H3 color='primary'  weight='500' transform='uppercase'>{title}</H3>
                    <H4Huge weight='300'>{text}</H4Huge>
                </Text>
                <CardImg src={img} alt="" />
            </Card>
        </>
    )
}