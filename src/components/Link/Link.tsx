import { PropsType } from '@/interface/props';
import classes from "@/components/Link/Link.module.css";

export default function Link({children,color,onClick}:PropsType) {
    return (
        <a className={classes.linkContainer} onClick={()=>onClick()} style={{color}}>
            {children}
        </a>
    );
}

