import echo from '~/src/modules/echo'

// add module initializers here
const modules = [echo]

/**
 * Initializes each module by passing the bot
 * instance to them.
 *
 * @param {Bot} bot
 *
 * @returns {void}
 */
export default bot => modules.forEach(init => init(bot))
