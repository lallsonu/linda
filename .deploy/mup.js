module.exports = {
  servers: {
    one: {
      host: '138.197.166.9',
      username: 'root',
      pem: '~/.ssh/id_rsa',
      opts: {
        port:22
      }
    }
  },
  app: {
    name: 'linda',
    path: '../',
    docker: {
      image: 'zodern/meteor:root'
    },
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'https://lindaluztono.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    }
  },
  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },
    proxy: {
      domains: 'lindaluztono.com,www.lindaluztono.com',
      ssl: {
        // Enable let's encrypt to create free certificates.
        // The email is used by Let's Encrypt to notify you when the
        // certificates are close to expiring.
        letsEncryptEmail: 'sukhwinder.s.lall@gmail.com',
        forceSSL: true
      }
    }

};