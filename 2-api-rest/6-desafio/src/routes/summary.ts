import { FastifyInstance } from 'fastify'

import { indexSummary } from '../controllers/summary-controller'

import { checkUserIdExists } from '../middlewares/check-user-id-exists'

const preHandler = [checkUserIdExists]

export async function summaryRoutes(app: FastifyInstance) {
  app.get('/', { preHandler }, indexSummary)
}
