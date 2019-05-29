import echo from '~/src/modules/echo'
import magic from '~/src/modules/magic'
import tube from '~/src/modules/tube'

// add module initializers here
const modules = [echo, magic, tube]

/**
 * Initializes each module by passing the bot
 * instance to them.
 *
 * @param {Bot} bot
 *
 * @returns {void}
 */
export default bot => modules.forEach(init => init(bot))
