import { PropsType } from '@/types/props';
import classes from "@/components/Link/Link.module.css";

export default function Link({children,width,color,onClick}:PropsType) {

    const linkStyle={
        width,
        color,
    }

    return (
        <a style={{...linkStyle}} className={classes.linkContainer} onClick={()=>onClick()}>
            {children}
        </a>
    );
}

