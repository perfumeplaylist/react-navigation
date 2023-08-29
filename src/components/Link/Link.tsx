import React from 'react';

export default function Link({children,color,size,style,onLinkClick}) {
    const linkStyle={
        ...style,
        color,
        size
    }
    return (
        <a style={...linkStyle} onClick={onLinkClick}>
            {children}
        </a>
    );
}

