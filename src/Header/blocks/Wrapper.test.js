import React from 'react'
import renderer from 'react-test-renderer'

import Wrapper from './Wrapper'

describe('<Wrapper></Wrapper>', () => {
  it('renders', () => {
    expect(<Wrapper>child</Wrapper>).toMatchSnapshot()
  })
})
