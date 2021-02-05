import server from '../services/search'

exports.handler = server.createHandler({
  cors: { origin: '*' },
})
