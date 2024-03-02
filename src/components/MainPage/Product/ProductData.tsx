export interface IProductList {
    productData: IProduct[]
}

export interface IProduct {
    img: string
    tag: string
    list: IList[]
}

export interface IList {
    text: string
}

export const productData: IProduct[] = [
    {
        img: require('../../../images/product-1.png'),
        tag: '#Малоэтажное строительство',
        list: [
            {text: 'Готовые решения загородных домов'},
            {text: 'Ипотека от 0,1%'},
            {text: 'Земельные участки'},
            {text: 'Индивидуальные проекты под ключ'},
        ],
    },
    {
        img: require('../../../images/product-2.png'),
        tag: '#Отопительная система дома',
        list: [
            {text: 'Газовые котлы'},
            {text: 'Электрические котлы'},
            {text: 'Электрические котлы'},
            {text: 'Автоматические твердотопливные котлы'},
            {text: 'Радиаторы'},
        ],
    },
    {
        img: require('../../../images/product-3.png'),
        tag: '#Фильтры для окон',
        list: [
            {text: 'Чистая квартира без пыли'},
            {text: 'Без аллергенов в доме'},
            {text: 'Защита от смога'},
            {text: 'С возможностью чистки'},
        ],
    },
    {
        img: require('../../../images/product-4.png'),
        tag: '#Заказ авто из южной кореи',
        list: [
            {text: 'Подбор автомобиля и его доставка под ключ'},
            {text: 'Цена ниже на 30-40% чем в Европе'},
            {text: 'Полная диагностика автомобиля'},
        ],
    },
]