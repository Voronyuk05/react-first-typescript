export interface IPlace {
    img: string
    text: string
}

export const placesData: IPlace[] = [
    {
        img: require('../../../../images/house.svg'),
        text: 'Дом'
    },
    {
        img: require('../../../../images/apartament.svg'),
        text: 'Квартира'
    },
    {
        img: require('../../../../images/balcony.svg'),
        text: 'Балкон'
    },
    {
        img: require('../../../../images/bathhouse.svg'),
        text: 'Баня'
    },
    {
        img: require('../../../../images/non-residential.svg'),
        text: 'Нежилое'
    },

]