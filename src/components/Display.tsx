import React, { FC } from 'react'

interface DisplayProps {
    numbers: string[]
}
const Display: FC<DisplayProps> = ({numbers}) => {
    let show = ''
    numbers.map(number => {show = show + number})

    return <input type='text' value={show} style={{width:'320px', height:'30px', fontSize:'20px', margin:'10px'}}/>
}

export default Display