import { z } from 'zod'

import { knex } from '../database'

import { Meal } from '../domain/meal'

export async function updateMealsUC(meal: Meal): Promise<Meal> {
  const schema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    user_id: z.string().uuid(),
    fed_on: z.coerce.date(),
    on_diet: z.boolean(),
  })

  const { id, name, description, fed_on, on_diet, user_id } = schema.parse({
    ...meal,
    fed_on: new Date(meal.fed_on),
  })

  const updateMeal = {
    name,
    description,
    fed_on,
    on_diet,
    user_id,
  }

  await knex('meals').where({ id, user_id }).update(updateMeal)

  return updateMeal
}
