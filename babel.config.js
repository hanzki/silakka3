module.exports = function (api) {
  api.cache(true)

  const presets = ['@babel/env']
  const plugins = ['@babel/proposal-object-rest-spread']

  return {
    presets,
    plugins
  }
}
