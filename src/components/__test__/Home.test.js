/* @flow */
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Hello from '../Home'

test(async t => {
  const wrapper = shallow(<Hello />)
  t.is(wrapper.text(), 'Home')
})
