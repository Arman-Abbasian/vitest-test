type DecreaseButtonProps={
    onDecreaseHandler:()=>void
}


function DecreaseButton(props:DecreaseButtonProps) {
    const {onDecreaseHandler}=props
  return (
    <button onClick={onDecreaseHandler}>
        -
    </button>
  )
}

export default DecreaseButton