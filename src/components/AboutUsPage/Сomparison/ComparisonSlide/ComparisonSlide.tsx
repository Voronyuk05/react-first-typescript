import {  IComparison } from "../ComparisonData";
import { ComparisonSlideComponent } from "./ComparisonSlide.styled"
import { ComparisonSlideItem } from "../ComparisonSlideItem/ComparisonSlideItem"

interface IComparisonSlideProps {
    slideData: IComparison[]
    bgc?: string
}

export const ComparisonSlide: React.FC<IComparisonSlideProps> = ({slideData, bgc}) => {
    return (
        <ComparisonSlideComponent bgc={bgc}>
            {slideData.map(({img, title, paragraph, list}, index: number) => (
                <ComparisonSlideItem key={index} 
                index={index} 
                img={img} 
                title={title}
                paragraph={paragraph}
                list={list} />
            ))}
        </ComparisonSlideComponent>
    )
}