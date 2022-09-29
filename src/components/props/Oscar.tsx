type OscarProps = {
  children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
  return( 
  <div className="reusable__container">{props.children}</div>)
}
