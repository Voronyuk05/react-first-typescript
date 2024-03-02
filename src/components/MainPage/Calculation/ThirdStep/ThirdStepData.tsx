export interface ICoating {
    text: string
}

export interface IMaterial {
    text: string
}

export const coatingData: ICoating[] = [
    {
        text: 'Плитка'
    },
    {
        text: 'Ламинат '
    },
    {
        text: 'Паркет'
    },
    {
        text: 'Линолеум'
    },
    {
        text: 'ПВХ плитка'
    },
    {
        text: 'Ковролин'
    },
]

export const materialData: IMaterial[] = [
    {
        text: 'Кирпич'
    },
    {
        text: 'Брус дерево'
    },
    {
        text: 'Пенобетон'
    },
    {
        text: 'SIP панели'
    },
    {
        text: 'ПВХ панели'
    },
    {
        text: 'Другое'
    },
]