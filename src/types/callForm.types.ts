
export interface ICallForm  {
    isCallSubmited: boolean, 
    callData: ICallData,
    callModal: boolean,
}

export interface ICallData {
    name: string,
    number: string
}