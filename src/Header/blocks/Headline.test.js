import React from 'react'

import Headline from './Headline'

describe('<Headline></Headline>', () => {
  it('renders', () => {
    expect(<Headline/>).toMatchSnapshot()
  })
  it('renders overwriting text', () => {
    expect(<Headline>Other Headline</Headline>).toMatchSnapshot()
  })
})
