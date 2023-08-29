import { PropsType } from '@/interface/props';

export default function Text({children,block=true,size,color}:PropsType) {
    const Tag=block ?  "div" : "p"; 
    const textStyle={
        color,
        fontSize:size,
    }
    return (
        <Tag style={{...textStyle}}>
            {children}
        </Tag>
    );
}

