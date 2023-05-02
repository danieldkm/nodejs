import { z } from 'zod'
import { randomUUID } from 'node:crypto'

import { knex } from '../database'

import { User } from '../domain/user'

export async function createUsersUC(user: User): Promise<User> {
  const createUserBodySchema = z.object({
    name: z.string(),
  })

  const { name } = createUserBodySchema.parse(user)

  const createUser = {
    id: randomUUID(),
    name,
  }

  await knex('users').insert(createUser)

  return createUser
}
