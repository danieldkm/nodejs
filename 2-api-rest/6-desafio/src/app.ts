import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { mealsRoutes } from './routes/meals'
import { usersRoutes } from './routes/users'
import { usersMealsRoutes } from './routes/users-meals'
import { summaryRoutes } from './routes/summary'

export const app = fastify()

app.register(cookie)

app.register(mealsRoutes, {
  prefix: 'meals',
})

app.register(usersRoutes, {
  prefix: 'users',
})

app.register(usersMealsRoutes, {
  prefix: 'users/meals',
})

app.register(summaryRoutes, {
  prefix: 'summary',
})
