function DecreaseButton(props) {
    const {onDecreaseHandler}=props
  return (
    <button onClick={onDecreaseHandler}>
        +
    </button>
  )
}

export default DecreaseButton