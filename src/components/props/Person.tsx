import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
  return (
    <div className='person__container'>
      <h2>Passing Data to a Component</h2>
    <h3>
      {props.name.first} {props.name.last}
    </h3>
    </div>
  )
}
