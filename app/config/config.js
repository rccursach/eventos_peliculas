
module.exports = {
  db: {
    uri: 'mongodb://localhost/peliculas_evts',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  }
}