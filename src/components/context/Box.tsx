import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className='box__container'>
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
        padding: theme.primary.padding
      }}>
        <h3 
        style={{
          color: theme.secondary.text,
        }} >Theme Context</h3> 
    </div></div>
  )
}

