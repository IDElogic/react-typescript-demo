import { Name } from './Person.types'

type PersonListProps = {
  names: Name[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div className='personlist__conatiner'>
      <h2>Displaying List Data</h2>
      {props.names.map(name => {
        return (
          <h3 key={name.first}>
            {name.first} {name.last}
          </h3>
        )
      })}
    </div>
  )
}
