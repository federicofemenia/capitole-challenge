import React from 'react'

interface ButtonProps {
    value: string;
    onClick?: any;
    width?: number;
}
const Button = ({value, onClick, width}:ButtonProps) => {
return <input type='button' value={value} onClick={onClick} style={{width:`${width}px`, height:'30px', fontSize:'20px', margin:'10px'}}/>
}

export default Button