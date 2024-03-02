export interface IStepList {
    stepsData: IStep[]
}

export interface IStep  {
    img: string
    title: string
    text: string
    button?: string
}

export const stepsData: IStep[] = [
    {
        img: require('../../../images/steps-booking.png'),
        title: 'Оставляете заявку на сайте',
        text: 'и наш специалист свяжется с вами в ближайшее время' ,
        button: 'Оставить заявку'
    },
    {
        img: require('../../../images/steps-live-chat.png'),
        title: 'Консультируетесь со специалистом',
        text: 'Рассказываем о процессе работы, отвечаем на ваши вопросы, уточняем детали' 
    },
    {
        img: require('../../../images/steps-draft.png'),
        title: 'Готовим проект',
        text: 'Расписываем все этапы работы, к вам выезжает специалист для предварительных расчетов' 
    },
    {
        img: require('../../../images/steps-assignment.png'),
        title: 'Заключаем договор',
        text: 'Фиксируем цены и условия. Если захотите внести изменения, оформим дополнительное соглашение' 
    },
    {
        img: require('../../../images/steps-hard-hat.png'),
        title: 'Выполняем монтаж теплых полов',
        text: 'Рассказываем о процессе работы, отвечаем на ваши вопросы, уточняем детали' 
    },
    {
        img: require('../../../images/steps-live-chat.png'),
        title: 'Запускаем и проверяем системы',
        text: 'Проводим проверку работы системы и подписания актов' 
    },
]