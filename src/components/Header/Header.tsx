import React from 'react';
import classes from "@/components/Header/Header.module.css"
import { PropsType } from '@/interface/props';

export default function Header({children,mode='horization',backgroundColor="black",style}:PropsType) {
    const HeaderStyle={
        ...style,
        display: mode==='horization' ? "flex" : undefined,
        backgroundColor,
    }
    return (
        <header style={{...HeaderStyle}} className={classes.header}>
            {children}
        </header>
    );
}

