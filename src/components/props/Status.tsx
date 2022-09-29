type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
  let message
  if (props.status === 'loading') {
    message = 'Loading...'
  } else if (props.status === 'success') {
    message = 'Data fetched successfully!'
  } else if (props.status === 'error') {
    message = 'Error fetching data'
  }
  return (
    <div className="status__container"> 
    <h2>Passing Props to a Component</h2>
      <h3>Status - {message}</h3> 
    </div> )
}
