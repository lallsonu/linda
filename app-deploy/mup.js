module.exports = {
  servers: {
    one: {
      "host": "52.42.51.232",
      "username": "ubuntu",
      //"password": "password"
      // or pem file (ssh based authentication)
      "pem": "Euphorio.pem"
    }
  },

  meteor: {
    name: "Euphorio",
    path: "../",
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
      debug: false
    },
    env: {
      "ROOT_URL": "https://eufor.io",
      "MONGO_URL":"mongodb://localhost/meteor"
    },

    ssl: {
       crt: 'www_eufor_io.crt',
       key: 'privatekey.key',
       port: 443
    },

    dockerImage: 'abernix/meteord:node-8.9.1-base',
    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 420
  },

  mongo: { // optional
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};
