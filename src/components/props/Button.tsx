type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
  return <button className="btn" onClick={event => props.handleClick(event, 1)}>Click</button>
}
