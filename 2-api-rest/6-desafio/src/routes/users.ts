import { FastifyInstance } from 'fastify'

import { createUsers } from '../controllers/users-controller'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', createUsers)
}