'use client'
import React from 'react'

const ThemedBtn = ({handleSubmit}) => {
    

    return (
    <button onClick={handleSubmit} className='border-2 border-yellow-950 rounded-md px-6 py-2 w-fit self-center bg-gradient-to-r from-taupe-200  to-yellow-950 from-0% font-semibold active:border-taupe-200 active:text-yellow-950 active:from-100%  hover:border-taupe-200 hover:text-yellow-950 hover:from-100% ease-in '>
      Trimite!
    </button>
  )
}

export default ThemedBtn
