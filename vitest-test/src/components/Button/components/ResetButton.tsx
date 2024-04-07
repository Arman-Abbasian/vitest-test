type ResetButtonProps={
    onResetHandler:()=>void
}

function ResetButton(props:ResetButtonProps) {
    const {onResetHandler}=props
  return (
    <button onClick={onResetHandler}>
        +
    </button>
  )
}

export default ResetButton