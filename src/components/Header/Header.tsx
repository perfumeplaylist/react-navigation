import { PropsType } from '@/interface/props';
import classes from '@/components/Header/Header.module.css';
import { useRef, useEffect } from 'react';
import { delay } from '@/util/delay';

export default function Header({children,mode='horization',backgroundColor="black"}:PropsType) {
    const headerRef=useRef(null);

    useEffect(()=>{
        if(headerRef.current){
            headerRef.current.classList.add(`${classes.active}`);
        }
      delay(800).then(()=>{
        if(headerRef.current){
            headerRef.current.classList.remove(`${classes.active}`);
        }
      })
      return ()=>{
      }
    },[children]);

    const HeaderStyle={
        display: mode==='horization' ? "flex" : undefined,
        backgroundColor,
    };

    return (
        <header style={{...HeaderStyle}} className={classes.header} ref={headerRef}>
            {children}
        </header>
    );
}

