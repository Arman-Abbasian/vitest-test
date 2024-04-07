type IncreaseButtonProps={
    onIncreaseHandler:()=>void
}

function IncreaseButton(props:IncreaseButtonProps) {
    const {onIncreaseHandler}=props
  return (
    <button onClick={onIncreaseHandler}>
        +
    </button>
  )
}

export default IncreaseButton