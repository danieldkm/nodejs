import { findAllMealsByUser } from '../usecases/find-all-meals-by-user'

export const showUsersMeals = async (req, res) => {
  const { userId } = req.cookies
  const meals = await findAllMealsByUser(userId)

  return res.send(meals)
}
