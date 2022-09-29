
import './App.css';
import {Greeting } from './components/props/Greeting'
import {Person } from './components/props/Person'
import {PersonList} from './components/props/PersonList'
import {Status} from './components/props/Status'
import { Heading } from './components/props/Heading'
import { Oscar } from './components/props/Oscar'
import { Button } from './components/props/Button'
import { Input } from './components/props/Input'
import { Container } from './components/props/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'
import { DomRef } from './components/refs/DomRef'
import { MutableRef } from './components/refs/MutableRef'
import { Counter } from './components/class/Counter'
import { List } from './components/generics/List'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'
import { RandomNumber } from './components/restriction/RandomNumber'

function App() {

  const personName = {
    first: 'Example',
      last:'Name',
  }

  const nameList = [
    {
      first: 'Example',
      last:'Name1',
    },
    {
      first: 'Example',
      last:'Name2',
    },
    {
      first: 'Example',
      last:'Name3',
    },
    {
      first: 'Example',
      last:'Name4',
    }
  ]

  return (
    <div className="App">
      <Greeting name='stranger' messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Reusable component</Heading>
      <Oscar>
        <Heading>More Reusable Components</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: 'none', padding: '1rem', fontSize: '24px' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message='The count value is ' />
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
       Click
      </CustomButton>
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
