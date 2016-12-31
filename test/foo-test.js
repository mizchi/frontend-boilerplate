/* @flow */
import foo from "../src/foo";
import test from "ava";

test(t => {
  t.is(foo(), 1);
});
