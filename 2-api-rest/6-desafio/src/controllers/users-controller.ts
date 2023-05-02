import { createUsersUC } from '../usecases/create-users'

export const createUsers = async (req, res) => {
  try {
    const user = await createUsersUC(req.body)

    if (user) {
      res.setCookie('userId', user.id, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    return res.status(201).send()
  } catch (error) {
    return res.status(400).send({
      message: JSON.parse(error.message),
    })
  }
}
