import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div className='domref__container'>
      <input type='text' ref={inputRef} />
    </div>
  )
}
