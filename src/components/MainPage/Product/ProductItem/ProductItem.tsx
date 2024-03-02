import { IProduct } from '../ProductData'
import { Item, ListText, ItemList, ItemLogo } from "./ProductItem.styled";
import { WhiteButton, Paragraph, Tag } from "../../../Global.styled";

export const ProductItem: React.FC<IProduct> = ({img, tag, list}): JSX.Element => {
    return (
        <Item>
            <ItemLogo src={img}/>
            <Tag>{tag}</Tag>
            <ItemList>
                {list.map(({text}) => (
                    <ListText key={text}>
                        <Paragraph weight='300' opacity='0.7' color='white' >{text}</Paragraph>
                    </ListText>
                ))}
            </ItemList>
            <WhiteButton>Оставить заявку</WhiteButton>
        </Item>
    )
}