import { createLogger, format as formatLog, transports } from 'winston'
import moment from 'moment'
import { cyan } from 'chalk'
import { logLevel } from '~/src/config'

const { combine, timestamp, printf, colorize } = formatLog

const formatTime = stamp => moment(stamp).format('MMMM Do YYYY, h:mm:ss a')

const format = printf(
  ({ level, message, label, timestamp }) =>
    `[${cyan(formatTime(timestamp))}] ${level}: ${message}`
)

/**
 * Application wide logger instance
 *
 * @see https://github.com/winstonjs/winston
 */
export default createLogger({
  level: logLevel,
  format: combine(timestamp(), colorize(), format),
  defaultMeta: { service: 'silakka' },
  transports: [new transports.Console()]
})
