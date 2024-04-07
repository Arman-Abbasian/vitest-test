type ResetButtonProps={
    onResetHandler:()=>void
}

function ResetButton(props:ResetButtonProps) {
    const {onResetHandler}=props
  return (
    <button onClick={onResetHandler}> reset </button>
  )
}

export default ResetButton