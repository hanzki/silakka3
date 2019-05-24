import { config } from 'dotenv'

const mode = process.env.NODE_ENV || 'development'

const isProduction = mode === 'production'

!isProduction && config()

const logLevel =
  process.env.LOG_LEVEL ||
  { production: 'info', development: 'debug', test: 'none' }[mode]

const apiToken = process.env.TELEGRAM_API_TOKEN

export { mode, isProduction, logLevel, apiToken }
