import { z } from 'zod'

import { knex } from '../database'
import { Meal } from '../domain/meal'

interface IRequest {
  id: string
  user_id: string
}

export async function getMealById(request: IRequest) {
  const schema = z.object({
    id: z.string().uuid(),
    user_id: z.string().uuid(),
  })

  const { id, user_id } = schema.parse(request)

  const meal = await knex('meals').where({ id, user_id }).first()
  return meal && new Meal(meal).toMap()
}
