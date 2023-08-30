import { useState } from 'react';
import { SessionProps,newRouter } from '@/interface/props';



export const useSessionStorage=({key,initalState}:SessionProps)=>{
    const [router,setRouter]=useState(()=>{
        try{
            const storage=sessionStorage.getItem(key);
            return storage ? JSON.parse(storage) : initalState;
        }catch(error){
            console.error(error);
            return initalState;
        }
    })

    const setState=(newRouter : newRouter)=>{
        try{
            const storage=typeof newRouter==="function" ? newRouter(router) : newRouter;
            setRouter(storage);
            sessionStorage.setItem(key,JSON.stringify(storage));
        }catch(error){
            console.error(error);
        }
    }

    return [router,setState]
}