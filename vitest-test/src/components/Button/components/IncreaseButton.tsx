

function IncreaseButton(props) {
    const {onIncreaseHandler}=props
  return (
    <button onClick={onIncreaseHandler}>
        +
    </button>
  )
}

export default IncreaseButton