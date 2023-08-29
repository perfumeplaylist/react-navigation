import React from 'react';

export default function Text({children,block,size,style}) {
    const Tag=block ?  "div" : "p"; 
    const textStyle={
        ...style,
        size
    }
    return (
        <Tag style={...textStyle}>
            {children}
        </Tag>
    );
}

