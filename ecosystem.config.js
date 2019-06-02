module.exports = {
  apps: [{
    name: 'Silakka',
    script: 'src/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    interpreter: 'node_modules/.bin/babel-node',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'hanzki',
      host: 'hilla.kapsi.fi',
      ref: 'origin/master',
      repo: 'https://github.com/hanzki/silakka3.git',
      path: '/home/users/hanzki/pm2/silakka',
      'post-deploy': 'yarn install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
