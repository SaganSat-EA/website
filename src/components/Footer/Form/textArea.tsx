import { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

export function TextArea({ name, ...rest }) {
  const textAreaRef = useRef(null)
  const { fieldName, registerField, error } = useField(name)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <div>
      <textarea
        ref={textAreaRef}
        onChange={e => e.target.value}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  )
}