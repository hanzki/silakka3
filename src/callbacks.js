import { CALLBACK_MODULE_SEPARATOR } from '~/src/constants'

export const callbackData = (mod, data) =>
  `${mod}${CALLBACK_MODULE_SEPARATOR}${data}`

export const callbackSplit = callback =>
  callback.split(CALLBACK_MODULE_SEPARATOR)
