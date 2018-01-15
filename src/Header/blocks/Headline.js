import React from 'react'

import './Headline.css'

export default function Headline({
  children = "Welcome to React"
}) {
  return(
    <h1 className="App-title">{children}</h1>
  )
}
