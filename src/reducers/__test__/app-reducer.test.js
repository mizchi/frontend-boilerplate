/* @flow */
import test from 'ava'
import page from '../app-reducer.js'

test('Reduce RESET', t => {
  const initialState = {}
  const nextState = page(initialState, { type: 'RESET' })
  t.deepEqual(nextState, {})
})
