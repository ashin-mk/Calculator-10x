import React from 'react'
import {useState} from "react"
import "./calculator.css"
const Calculator = () => {
const [input,setInput]=useState("")
const handlecalculator=(e)=>{
    e.preventDefault()
    setInput(input+e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
setInput(eval(input))
}
const handleclear =(e)=>{
    e.preventDefault()
    setInput("")
}

  return (
    <div>
          <div id="container">
         <div className="heading">CALCULATOR</div>
    <div className="row">
        <p>{input}</p>
        <button id="clear" value="clear" onClick={(e)=>handleclear(e)}>C</button>
    </div>
    <div className="row">
    <button value="1" onClick={(e)=>handlecalculator(e)}>1</button>
    <button value= "2"onClick={(e)=>handlecalculator(e)}>2</button>
    <button value="3" onClick={(e)=>handlecalculator(e)}>3</button>
    <button value="/" onClick={(e)=>handlecalculator(e)}>/</button>
</div>
<div className="row">
    <button value="4" onClick={(e)=>handlecalculator(e)}>4</button>
    <button value="5" onClick={(e)=>handlecalculator(e)}>5</button>
    <button value="6" onClick={(e)=>handlecalculator(e)}>6</button>
    <button value="-" onClick={(e)=>handlecalculator(e)}>-</button>
</div>
<div className="row">
    <button value="7" onClick={(e)=>handlecalculator(e)}>7</button>
    <button value="8" onClick={(e)=>handlecalculator(e)}>8</button>
    <button value="9" onClick={(e)=>handlecalculator(e)}>9</button>
    <button value="+" onClick={(e)=>handlecalculator(e)}>+</button>
</div>
<div className="row">
    <button value="." onClick={(e)=>handlecalculator(e)}>.</button>
    <button value="0" onClick={(e)=>handlecalculator(e)}>0</button>
    <button value="=" onClick={(e)=>handleSubmit(e)}>=</button>
    <button value="*" onClick={(e)=>handlecalculator(e)}>*</button>
    </div>
    </div>
    </div>
  )
}

export default Calculator