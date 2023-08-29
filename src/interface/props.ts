import { ReactNode } from 'react';

export interface PropsType{
    children:ReactNode,
    weight?:number,
    size?:string,
    backgroundColor?:string,
    mode?:string,
    color?:string,
    block?:boolean,
}

export interface Router{
    id:string,
    title:string
}

export interface SessionProps{
    key:string,
    initalState:Router[]
}

export type newRouter=Router[] | ((prev:Router[])=>Router[]);