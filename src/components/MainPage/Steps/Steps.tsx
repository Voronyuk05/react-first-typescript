import { StepsList } from "./StepsList/StepsList";
import { stepsData } from "./StepsData";
import { StepsComponent } from "./Steps.styled";
import { ContainerColumn, H2, FontDark } from "../../Global.styled";

export function Steps(): JSX.Element {
    return (
        <StepsComponent>
            <ContainerColumn>
                <H2 color="primary" weight='100'>Всего <FontDark>6 шагов</FontDark> до теплого дома</H2>
                <StepsList stepsData={stepsData} />
            </ContainerColumn>
        </StepsComponent>
    )
}