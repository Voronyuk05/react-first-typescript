import { IStep } from '../StepsData'
import { Item, ItemImg } from "./StepItem.styled";
import { H3, H4Huge, WhiteButton } from "../../../Global.styled";

export const StepsItem: React.FC<IStep> = ({img, title, text, button}): JSX.Element => {
    return (
        <Item>
            <ItemImg src={img}/>
            <H3 color="white" align='center'>{title}</H3>
            <H4Huge align='center' color='white' weight='300'>{text}</H4Huge>
            {button ? (
                <WhiteButton>
                    Оставить заявку
                </WhiteButton>
            ) : null}
        </Item>
    )
}