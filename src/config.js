import { config } from 'dotenv'

const mode = process.env.NODE_ENV || 'development'
const isDevelopment = mode === 'development'

isDevelopment && config() // read .env file at the root of project

export default process.env
