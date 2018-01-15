import React from 'react'
import rederer from 'react-test-renderer'

import Logo from './Logo'

describe('<Logo/>', () => {
  it('renders', () => {
    expect(<Logo/>).toMatchSnapshot()
  })
})
