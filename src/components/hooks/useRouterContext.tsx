import { createContext, ReactNode } from 'react';
import { useSessionStorage } from './useSessionStorage';
import { v4 } from "uuid"

export const RouterContext=createContext();

export function RouterContextProvider({children}:{children:ReactNode}){
    const [router,setRouter]=useSessionStorage({key:"router",initalState:[{id:v4(),title:"Home"}]});
    console.log(router,setRouter);
    return (
    <RouterContext.Provider value={router} setRouter={setRouter}>
        {children}
    </RouterContext.Provider>
    )
}
