/* @flow */
import test from 'ava'
import page from './index'

test('Reduce RESET', t => {
  const initialState = { location: 'home', layoutType: 2 }
  const nextState = page(initialState, { type: 'RESET' })
  t.deepEqual(nextState, {})
})
