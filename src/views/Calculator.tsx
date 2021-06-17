import React, { useState } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'

const Calculator = () => {
    const [numbers, setNumbers] = useState<string[]>([])
    const addNumberToArray = (value:string) => {
    const newArray = [...numbers, value]
    setNumbers(newArray)
}

    const changeOrderToArray = () => {
        const firstElement = numbers.shift()
        const newArray = [...numbers, String(firstElement)]
        setNumbers(newArray) 
    }

    const addNumbers = () => {
        let result = 0
        for(let i=0; i<numbers.length;i++){
            result = result + Number(numbers[i])
        }
        setNumbers([String(result)])
    }

    const multiplyNumbers = () => {
        let result = 1
        for(let i=0; i<numbers.length;i++){
            result = result * Number(numbers[i])
        }
        setNumbers([String(result)])
    }

    const subtractNumbers = () => {
        let result = Number(numbers[0])
        for(let i=1; i<numbers.length;i++){
            result = result - Number(numbers[i])
        }
        setNumbers([String(result)])
    }
    
    
    return <div style={{border:'2px solid', width:'350px', margin:'10px'}}>
        <div><Display numbers={numbers}/></div>
        <div>
            <Button value='0' onClick={()=>addNumberToArray('0')}/>
            <Button value='1' onClick={()=>addNumberToArray('1')}/>
            <Button value='2' onClick={()=>addNumberToArray('2')}/>
            <Button value='3' onClick={()=>addNumberToArray('3')}/>
            <Button value='4' onClick={()=>addNumberToArray('4')}/>
        </div>
        <div> 
            <Button value='5' onClick={()=>addNumberToArray('5')}/>
            <Button value='6' onClick={()=>addNumberToArray('6')}/>
            <Button value='7' onClick={()=>addNumberToArray('7')}/>
            <Button value='8' onClick={()=>addNumberToArray('8')}/>
            <Button value='9' onClick={()=>addNumberToArray('9')}/>
        </div>
        <div>
            <Button width={300} value='Cambiar orden' onClick={changeOrderToArray}/>
        </div>
        <div>
            <Button value='Sumar' onClick={()=>addNumbers()}/>
            <Button value='Restar' onClick={()=>subtractNumbers()}/>
            <Button value='Multiplicar' onClick={()=>multiplyNumbers()}/>

        </div>
        <Button width={300} value='Limpiar' onClick={()=>setNumbers([])}/>
    </div>
}

export default Calculator