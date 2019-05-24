import { random, times } from 'lodash'

export const randomString = length => times(length, () => random(9)).join('')
