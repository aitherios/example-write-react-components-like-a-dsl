import React from 'react'
import './Wrapper.css'

export default function Wrapper({ children }) {
  return(
    <header className="App-header">
      {children}
    </header>
  )
}
