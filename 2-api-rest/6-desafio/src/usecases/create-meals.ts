import { z } from 'zod'
import { randomUUID } from 'node:crypto'

import { knex } from '../database'

import { Meal } from '../domain/meal'

export async function createMealsUC(meal: Meal): Promise<Meal> {
  const createBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    user_id: z.string().uuid(),
    fed_on: z.date(),
    on_diet: z.boolean(),
  })

  const { name, description, fed_on, on_diet, user_id } =
    createBodySchema.parse({
      ...meal,
      fed_on: new Date(meal.fed_on),
    })

  const createMeal = {
    id: randomUUID(),
    name,
    description,
    fed_on,
    on_diet,
    user_id,
  }

  console.log({
    createMeal,
  })
  await knex('meals').insert(createMeal)

  return createMeal
}
