import { z } from 'zod'

import { knex } from '../database'

interface IRequest {
  id: string
  user_id: string
}

export async function deleteMealsUC(request: IRequest): Promise<void> {
  const schema = z.object({
    id: z.string().uuid(),
    user_id: z.string().uuid(),
  })

  const { id, user_id } = schema.parse(request)

  await knex('meals').where({ id, user_id }).delete()
}
