import {CardItem} from './CardItem/CardItem'
import { CharterComponent, Title, CardsContainer, SubTitle } from "./Charter.styled.jsx";
import {ContainerColumn, H2, FontDark, FontPrimary} from "../../Global.styled.jsx";
import key from '../../../images/key.png'
import wire from '../../../images/wire.png'
import moneyBox from '../../../images/money-box.png'
import list from '../../../images/list.png'
import planete from '../../../images/planete.png'

interface ICardList {
    title: string,
    text: string,
    img: string,
}

const CardsList: ICardList[] = [
    {
        title: '5+ лет опыта',
        text: 'у каждого специалиста по монтажу',
        img: 'https://cdn-icons-png.flaticon.com/512/4228/4228953.png'
    },
    {
        title: 'Проект',
        text: 'Подготавляваем проект для каждого заказчика',
        img: key
    },
    {
        title: 'Материалы',
        text: 'Сертифицированы и имеют патент и паспорт качества',
        img: wire
    },
    {
        title: 'Цена',
        text: 'не отличается ни на копейку от договорной',
        img: moneyBox
    },
    {
        title: 'кредит',
        text: 'при необходимости оформляется кредитный договор',
        img: list
    },
    {
        title: 'Доставка',
        text: 'в любую точку страны через официальных дилеров Daewoo Enertec',
        img: planete
    },
]

export function Charter(): JSX.Element {
    const stylesProps = {
        weight: '300',
        align: 'center',
        color: 'primary'
    }

    return (
        <CharterComponent>
            <ContainerColumn>
                <Title>
                    <H2   weight='300' align='center' color='primary'><FontPrimary>XL PIPE</FontPrimary> - система отопления из Южной Кореи с 2010 года</H2>
                </Title>
                <CardsContainer>
                    {CardsList.map(({title, text, img}: ICardList) => (
                        <CardItem key={title} title={title} text={text} img={img} />
                    ))}
                </CardsContainer>
                <SubTitle>
                    <H2 {...stylesProps} >Экономьте <FontDark>до 20%</FontDark> денежных стредств на энергоресурсы в <FontDark>отопительный сезон</FontDark></H2>
                </SubTitle>
            </ContainerColumn>
        </CharterComponent>
    )
}