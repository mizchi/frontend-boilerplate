/* @flow */
import foo from './foo'
import test from 'ava'

test(async t => {
  t.is(foo(), 1)
})
