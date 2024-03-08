export interface IStepProps {
    handleChangeDate: Function
    info: IPropsInfo
}

export interface IPropsInfo {
    range: string
    place: string
    floor: string
    room: string
    plinth?: boolean
    coating: string
    material: string 
}


export interface ICalculation {
    step: number
    isSubmited: boolean
    info: IPropsInfo

}