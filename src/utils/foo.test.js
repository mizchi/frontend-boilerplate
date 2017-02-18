/* @flow */
import test from 'ava'
import foo from './foo'

test(async t => {
  t.is(foo(), 1)
})
