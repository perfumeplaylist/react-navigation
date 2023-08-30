import { PropsType } from '@/types/props';

export default function Text({children,block=true,size,color,width}:PropsType) {
    const Tag=block ?  "p" : "span"; 
    const textStyle={
        color,
        fontSize:size,
        width
    }
    return (
        <Tag style={{...textStyle}}>
            {children}
        </Tag>
    );
}

