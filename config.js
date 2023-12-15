const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    database: {
      connectionUrl: 'mongodb://localhost:27017',
      dbName: 'dbwordpolish'
    },
    server: {
      port: 3000
    }
  },
  stagin: {
    // Stagin environment configurations
  },
  production: {
    // Production environment configurations
  }
};

module.exports = config[env];