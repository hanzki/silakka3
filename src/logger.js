import { createLogger, format as formatLog, transports } from 'winston'
import moment from 'moment'
import { cyan } from 'chalk'

const { combine, timestamp, printf, colorize } = formatLog

const formatTime = stamp => moment(stamp).format('MMMM Do YYYY, h:mm:ss a')

const format = printf(
  ({ level, message, label, timestamp }) =>
    `[${cyan(formatTime(timestamp))}] ${level}: ${message}`
)

export default createLogger({
  level: 'info',
  format: combine(timestamp(), colorize(), format),
  defaultMeta: { service: 'silakka' },
  transports: [new transports.Console()]
})
