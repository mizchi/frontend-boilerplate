/* @flow */
import test from 'ava'
import page from './page'

test('Reduce TRANSITION', t => {
  const initialState = { location: 'index' }
  const nextState = page(initialState, { type: 'TRANSITION', location: 'edit' })
  t.is(nextState.location, 'edit')
})
