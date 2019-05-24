import { stringify } from 'query-string'
import { get as GET } from 'axios'
import logger from '~/src/logger'

export const get = (baseUrl, query) => {
  const url = `${baseUrl}?${stringify(query)}`
  logger.debug(`GET ${url}`)
  return GET(url)
}
