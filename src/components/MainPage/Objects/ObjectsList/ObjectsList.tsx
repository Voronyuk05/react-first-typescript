import { useObjects } from "../../../../hooks/useObjects";
import { useActions } from "../../../../hooks/useActions";
import { IObjectList } from '../ObjectsData'
import { List } from "./ObjectsList.styled";
import { ObjectItem } from "../ObjectItem/ObjectItem";
import { PrimaryButtonP } from "../../../Global.styled";

export const ObjectList: React.FC<IObjectList> = ({objectsData}): JSX.Element => {
    const {page} = useObjects()
    const pageObjects: number = page * 4

    const {handleIncreasePage, handleDecreasePage } = useActions()

    return (
        <>
            <List>
                {objectsData.map(({title, text, features, link, background}, index) => {
                    if (pageObjects > index) {
                        return (
                            <ObjectItem key={index} title={title} 
                            text={text} 
                            features={features} 
                            link={link} 
                            background={background} />
                        )
                    }
                })}
            </List>

            {pageObjects < objectsData.length ? (            
                <PrimaryButtonP onClick={() => handleIncreasePage()}>
                    Смотреть еще проекты
                </PrimaryButtonP>
            ) : (
                <PrimaryButtonP onClick={() => handleDecreasePage()}>
                    Вернутся
                </PrimaryButtonP>
            )}
        </>
    )
}