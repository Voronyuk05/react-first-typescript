import { ISlide, IList } from '../SlidesData'
import { Slide, SlideImg, SLideText, SlideList, ListItem } from "./SlideItem.styled"
import { H3, ParagraphDark, ItemTitle } from "../../../Global.styled"

export const  SlideItem: React.FC<ISlide> = ({img, title, text, list}): JSX.Element => {
        return (
            <Slide>
                <SlideImg src={img} alt="" />
                <SLideText>
                    <H3  weight='500' color='primary' align='center'>{title}</H3>
                    {text ? (
                        <ParagraphDark>{text}</ParagraphDark>
                    ) :  null}
                    <SlideList>
                        {list.map(({listTitle, listText}: IList) => (
                            <ListItem key={listTitle}>
                                {listTitle ? (
                                    <ItemTitle weight='600' color='primary'>{listTitle}</ItemTitle>
                                ) : null}
                                <ParagraphDark>{listText}</ParagraphDark>
                            </ListItem>
                        ))}
                    </SlideList>
                </SLideText>
            </Slide>
        )
}