type HeadingProps = {
  children: string
}

export const Heading = (props: HeadingProps) => {
  return (
  <div className="heading__container">
    <h2>{props.children}</h2>
  </div>)
}
