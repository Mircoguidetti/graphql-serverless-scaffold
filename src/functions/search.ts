import server from  '../services/search-service'

exports.handler = server.createHandler({
  cors: { origin: '*' },
})
