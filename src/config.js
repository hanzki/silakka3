import { config } from 'dotenv'

const MODE = process.env.NODE_ENV || 'development'

const isProduction = MODE === 'production'

// reads env variables from .env file in project root
!isProduction && config()

const LOG_LEVEL =
  process.env.LOG_LEVEL ||
  { production: 'info', development: 'debug', test: 'none' }[MODE]

const API_TOKEN = process.env.TELEGRAM_API_TOKEN

export { MODE, API_TOKEN, LOG_LEVEL }
