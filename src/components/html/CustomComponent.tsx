import React from 'react'
import { Greeting } from '../props/Greeting'

export const CustomComponent = (props: React.ComponentProps<typeof Greeting>) => {
  return <div>{props.name}</div>
}
