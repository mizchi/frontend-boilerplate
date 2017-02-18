/* @flow */
import test from 'ava'
import { incrementAsync } from './counter'

test('Create INCREMENT async', async t => {
  const action = await incrementAsync()
  t.deepEqual(action, { type: 'INCREMENT' })
})
