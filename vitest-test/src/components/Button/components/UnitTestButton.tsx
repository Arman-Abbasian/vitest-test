import { useState } from "react"


function UnitTestButton() {
    const [count,setCount]=useState(0); 
    const incrementHandler=()=>{
      setCount(prevCount=>prevCount+1)
    }
    const decrementHandler=()=>{
      setCount(prevCount=>prevCount-1)
    }
    const resetHandler=()=>{
      setCount(0)
    }
  return (
    <div>
        <p data-testid="count">{count}</p>
        <p>hello world</p>
        <button className="increaseBTN" onClick={incrementHandler}>+</button>
        <button className="decreaseBTN" onClick={decrementHandler}>-</button>
        <button className="decreaseBTN" onClick={resetHandler}>Reset</button>
    </div>
  )
}
export default UnitTestButton