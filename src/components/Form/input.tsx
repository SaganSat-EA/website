import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

export function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, error } = useField(name)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <div>
      <input
        ref={inputRef}
        onChange={e => e.target.value}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  )
}