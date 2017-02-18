/* @flow */
import type { IncrementAction } from '../types/action'

export async function incrementAsync (): Promise<IncrementAction> {
  return { type: 'INCREMENT' }
}

export default {}
