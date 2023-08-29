import { ReactNode } from 'react';

export interface PropsType{
    children:ReactNode,
    weight?:number,
    size?:string,
    backgroundColor?:string,
    mode?:string,
    color?:string,
    block?:boolean,
    onClick?:(newValue:Router[])=>void
}

export interface Router{
    title:string
}