import { PropsType } from '@/interface/props';

export default function Text({children,block=true,size,color}:PropsType) {
    const Tag=block ?  "p" : "span"; 
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

