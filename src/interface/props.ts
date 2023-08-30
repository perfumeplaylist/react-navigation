import { ReactNode } from 'react';

export interface PropsType{
    children?:ReactNode,
    weight?:number,
    size?:string,
    backgroundColor?:string,
    mode?:string,
    color?:string,
    block?:boolean,
    onClick?:()=>void
}

export interface Router{
    id:string,
    title:string
}

export interface SessionProps{
    key:string,
    initalState:Router[]
}

export interface handleRouterProps{
    type:string,
     action?:{type:string,title?:string,tempId?:string}
}

export type newRouter=Router[] | ((prev:Router[])=>Router[]);