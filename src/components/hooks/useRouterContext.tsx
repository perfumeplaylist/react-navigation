import { createContext, ReactNode } from 'react';
import { v4 } from "uuid"
import { useSessionStorage } from '@/components/hooks/useSessionStorage';
import { handleRouterProps, Router } from '@/interface/props';

export const RouterContext=createContext();

export function RouterContextProvider({children}:{children:ReactNode}){
    const [router,setRouter]=useSessionStorage({key:"router",initalState:[{id:v4(),title:"Home"}]});

    const handleRouter=({type,action}:handleRouterProps)=>{
        switch(type){
            case 'pushState':{
                return setRouter((prev:Router[])=>[...prev,{id:v4(),title:action?.title}])
            }
            case 'go':{
                const idx=router.findIndex((item:Router)=>item.id===action?.tempId);
                return setRouter((prev:Router[])=>[...prev.slice(0,idx)])
            }
            case 'back':{
                return setRouter((prev:Router[])=>[...prev.slice(0,prev.length-1)])
            }
        }
    }

    return (
    <RouterContext.Provider value={{ router,handleRouter }}>
        {children}
    </RouterContext.Provider>
    )
}
