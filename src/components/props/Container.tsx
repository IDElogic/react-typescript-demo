type ContainerProps= {
  styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
    <div className="styleprops__container">
      <h2>Style Props</h2>
    <div style={props.styles}>
      Text content is here
    </div></div>
  )
}
