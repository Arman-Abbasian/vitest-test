import { useState } from "react";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";
import DecreaseButton from "./components/DecreaseButton";


function VitestButton() {
    const [count,setCount]=useState(0);
    const increaseHandler=()=>{
        setCount(prevCount=>prevCount+1)
    };
    const decreaseHandler=()=>{
        setCount(prevCount=>prevCount-1)
    }
    const resetHandler=()=>{
        setCount(0)
    }
  return (
    <div>
        <p>{count}</p>
        <IncreaseButton onIncreaseHandler={increaseHandler}/>
        <DecreaseButton onDecreaseHandler={decreaseHandler}/>
        <ResetButton onResetHandler={resetHandler} />
    </div>
  )
}

export default VitestButton;