import {useContext, useState} from "react";
import { RouterContext } from '@/components/hooks/useRouterContext';
import { PropsType, Router } from '@/types/props';
import classes from '@/components/List/List.module.css';
import Link from '@/components/Link/Link';
import Icon from '@/components/Icon/Icon';

export default function List({width}:PropsType) {
    const [isShow,setIsShow]=useState(false);
    const {router,handleRouter}=useContext(RouterContext);
    const handleShow=()=>{ setIsShow((prev)=>!prev)}

        return (
        <div style={{width}}>
            {isShow ? 
                (
                <ul className={classes.list}style={{overflowY:"scroll"}}>
                    {router.filter((_:Router[],i:number)=>i!==0).map(({id,title}:Router)=>
                        <li key={id}>
                            <Link onClick={()=>handleRouter({type:"go",action:{tempId:id}})} color="black">
                                {title}
                            </Link>
                        </li>
                    )}
                    <Icon className="material-symbols-outlined" onClick={handleShow}>
                        close
                    </Icon>
                </ul>
                ) 
            :
            <Icon className="material-symbols-outlined" 
                  onClick={handleShow}>
                  menu</Icon>}
        </div>
        )
}

