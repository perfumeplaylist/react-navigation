import { useRef,useEffect, useContext } from 'react';
import { RouterContext } from '@/components/hooks/useRouterContext';
import { viewPage } from '@/util/viewPage';
import HomePage from '@/page/HomePage';
import classes from "@/components/Navigation/Navigation.module.css"

export default function Navigation() {
    const mainRef=useRef(null);
    const {router}=useContext(RouterContext);

    useEffect(()=>{
        if(mainRef.current){
            (mainRef.current as HTMLElement).classList.add(`${classes.active}`);
        }
        const clearSetTimoutId=setTimeout(()=>{
            if(mainRef.current){
                (mainRef.current as HTMLElement).classList.remove(`${classes.active}`);
            }
        },300)
      return ()=>{
        clearTimeout(clearSetTimoutId)
      }
    },[router])
    return (
        <main ref={mainRef} className={classes.main}>
            {viewPage(router[router.length-1].title) ?? <HomePage />}
        </main>
    );
}

