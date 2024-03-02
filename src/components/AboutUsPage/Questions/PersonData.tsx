interface IPerson {
    img: string
    name: string
    post: string
}

export const personData: IPerson[] = [
    {
        img: require('../../../images/person-1.png'),
        name: 'Васалов Камил',
        post: 'Менеджер по работе с клиентами'
    },
    {
        img: require('../../../images/person-2.png'),
        name: 'Чурук Елена',
        post: 'Старший менеджер по работе с клиентами'
    },
    {
        img: require('../../../images/person-3.png'),
        name: 'Васильева Надежда',
        post: 'Менеджер по работе с клиентами'
    },
    {
        img: require('../../../images/person-4.png'),
        name: 'Васильева Диана',
        post: 'Менеджер по работе с клиентами'
    }
]