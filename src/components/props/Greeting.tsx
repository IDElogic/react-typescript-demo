
type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Greeting = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div className="greeting__container">
      <h2>React Tutorial using TypeScript</h2>
      {props.isLoggedIn ? (
        <h2 >
          Hey {props.name}! You have {messageCount} unread lessons.
        </h2>
      ) : (
        <h4>You have not any message</h4>
      )}
    </div>
  )
}
