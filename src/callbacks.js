import { CALLBACK_MODULE_SEPARATOR } from '~/src/constants'

/**
 * Creates new callback data string for given module id
 * and data string:
 *
 *    <moduleId>::<callbackData>
 *
 * @param {string} mod
 * @param {string} data
 *
 * @returns {string}
 */
export const callbackData = (mod, data) =>
  `${mod}${CALLBACK_MODULE_SEPARATOR}${data}`

/**
 * Splits given callback data string into an array containing
 * the module id and the rest of the callback data:
 *
 *    [ moduleId, callbackData ]
 *
 * @param {string} callback
 *
 * @returns {Array[string]}
 */
export const callbackSplit = callback =>
  callback.split(CALLBACK_MODULE_SEPARATOR)
