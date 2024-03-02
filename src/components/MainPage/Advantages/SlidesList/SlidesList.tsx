import { memo } from "react";
import { ISlideList } from '../SlidesData'
import { useSection } from "../../../../hooks/useSection";
import { SlidesCategory } from "./SlidesCategory/SlidesCategory";
import { SlidesComponent } from "./SlidesList.styled";
import { SlideItem } from "../SlideItem/SlideItem";

export const SlidesList: React.FC<ISlideList> = memo(({slidesData}): JSX.Element => {
    const {section} = useSection()
    
    return (
        <SlidesComponent>
            <SlidesCategory slidesData={slidesData}/>

            {slidesData.map(({category, img, title, text, list}) => {
                if (section === category) {
                    return (
                        <SlideItem 
                        key={title}
                        category={category}
                        img={img}
                        title={title} 
                        text={text}
                        list={list}
                        />
                    )
                }
                return null
            })}
        </SlidesComponent>
    )
}) 