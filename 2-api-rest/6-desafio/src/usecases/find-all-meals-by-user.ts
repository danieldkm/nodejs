import { z } from 'zod'

import { knex } from '../database'

import { Meal } from '../domain/meal'

export async function findAllMealsByUser(userId: string): Promise<Meal[]> {
  const schema = z.object({
    user_id: z.string().uuid(),
  })

  const { user_id } = schema.parse({ user_id: userId })

  const user = await knex('users').where({ id: user_id }).first()
  const meals = await knex('meals').where({ user_id })

  return {
    ...user,
    meals: meals.map((meal) => new Meal(meal).toMap()),
  }
}
