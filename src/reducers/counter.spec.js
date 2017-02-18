/* @flow */
import test from 'ava'
import counter from './counter'

test('Reduce INCREMENT', t => {
  const initialState = { count: 0 }
  const nextState = counter(initialState, { type: 'INCREMENT' })
  t.is(nextState.count, 1)
})

test('Reduce DECREMENT', t => {
  const initialState = { count: 0 }
  const nextState = counter(initialState, { type: 'DECREMENT' })
  t.is(nextState.count, -1)
})
