"use client"

import React from 'react'

interface ErrorPageProps{
    error: Error,
    reset: () => void,
}

const Error = ({error, reset}: ErrorPageProps) => {
  return (
    <div>
        <h1>Error</h1>
        <p>Something went wrong</p>
        <button onClick={reset} className='border-2 p-2 border-black'>Try again</button>
    </div>
  )
}

export default Error