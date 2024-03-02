import { Category } from "../SlidesList.styled"
import { useSection } from "../../../../../hooks/useSection";
import { useActions } from "../../../../../hooks/useActions";
import { ISlideList } from '../../SlidesData';
import { SecondaryButton, ActiveButton } from "../../../../Global.styled";

export const SlidesCategory: React.FC<ISlideList> = ({slidesData}):JSX.Element => {
    const {section} = useSection()
    const {handleChangeSection} = useActions()
    
    return (
        <Category>
            {slidesData.map(({category}) => {
                return section === category ? (
                    <ActiveButton
                        key={category}
                        onClick={() => {handleChangeSection(category)}} >
                            {category}
                    </ActiveButton>
                ) : (
                    <SecondaryButton
                        key={category}
                        onClick={() => {handleChangeSection(category)}} >
                            {category}
                    </SecondaryButton>
                )
            })}
        </Category>
    )
}