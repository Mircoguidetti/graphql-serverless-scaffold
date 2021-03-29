import server from '../services/graphql'

exports.handler = server.createHandler({
  cors: { origin: '*' },
})
