import { ReactNode } from 'react';

export interface PropsType{
    children:ReactNode,
    size?:number,
    weight?:number,
    backgroundColor?:string,
    mode?:string,
    color?:string,
    onClick?:(newValue:Router[])=>void
}

export interface Router{
    title:string
}