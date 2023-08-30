
import { PropsType } from '@/types/props';

export default function Icon({children,className,onClick}:PropsType) {
    return (
        <span className={className} onClick={()=>onClick()}>
            {children}
        </span>
    );
}

