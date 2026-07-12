import React from 'react'

const ThemedInput = ({placeholder,onChange}) => {
  return (
    <input placeholder={placeholder} onChange={onChange} className='border-2 border-yellow-950 rounded-md px-2 py-1 '/>
      
  )
}

export default ThemedInput
