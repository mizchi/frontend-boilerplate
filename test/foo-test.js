import foo from "../src/foo";
import test from 'ava';

test('foo() is 1', t => {
  t.is(foo(), 1);
});
