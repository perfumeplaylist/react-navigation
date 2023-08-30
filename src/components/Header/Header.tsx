import { useRef, useEffect, useContext } from 'react';
import { PropsType } from '@/interface/props';
import { RouterContext } from '@/components/hooks/useRouterContext';
import Link from '@/components/Link/Link';
import List from "@/components/List/List";
import Text from '@/components/Text/Text';
import classes from '@/components/Header/Header.module.css';
import Icon from '@/components/Icon/Icon';

export default function Header({mode='horization',backgroundColor="black"}:PropsType) {
    const headerRef=useRef(null);
    
    const {router,handleRouter}=useContext(RouterContext);

    useEffect(()=>{
        if(headerRef.current){
            (headerRef.current as HTMLElement).classList.add(`${classes.active}`);
        }
        const clearSetTimoutId=setTimeout(()=>{
            if(headerRef.current){
                (headerRef.current as HTMLElement).classList.remove(`${classes.active}`);
            }
        },700)
      return ()=>{
        clearTimeout(clearSetTimoutId)
      }
    
    },[router]);

    const HeaderStyle={
        display: mode==='horization' ? "flex" : undefined,
        backgroundColor,
    };

    return (
        <header style={{...HeaderStyle}} className={classes.header} ref={headerRef}>
              {router.length > 1 && 
              (
                <Link width="33%" onClick={()=>handleRouter({type:'back'})}>
                      <Icon className="material-symbols-outlined" onClick={()=>handleRouter({type:'back'})}>
                        arrow_back_ios
                      </Icon>
                      <Text block={true} size="1.5rem" color="white">   {router[router.length-1].title}
                      </Text>
                </Link>
              )
              }
            <Text block={true} size="1.5rem" color="white" width="33%">
                {router[router.length-1].title}
            </Text>
           {router.length > 1 && <List width="33%"/>}
        </header>
    );
}

