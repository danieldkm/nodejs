import { createMealsUC } from '../usecases/create-meals'
import { updateMealsUC } from '../usecases/update-meals'
import { deleteMealsUC } from '../usecases/delete-meals'
import { getMealById } from '../usecases/get-meal-by-id'

export const createMeals = async (req, res) => {
  const { userId } = req.cookies

  try {
    await createMealsUC({
      ...req.body,
      user_id: userId,
    })
  } catch (error) {
    return res.status(400).send({
      message: JSON.parse(error.message),
    })
  }

  return res.status(201).send()
}

export const updateMeals = async (req, res) => {
  const { userId } = req.cookies
  const { id } = req.params

  try {
    await updateMealsUC({
      ...req.body,
      id,
      user_id: userId,
    })
  } catch (error) {
    return res.status(400).send({
      message: JSON.parse(error.message),
    })
  }

  return res.status(204).send()
}

export const deleteMeals = async (req, res) => {
  const { userId } = req.cookies
  const { id } = req.params

  try {
    await deleteMealsUC({
      id,
      user_id: userId,
    })
  } catch (error) {
    return res.status(400).send({
      message: JSON.parse(error.message),
    })
  }

  return res.status(204).send()
}

export const indexMeals = async (req, res) => {
  const { userId } = req.cookies
  const { id } = req.params

  try {
    const meal = await getMealById({
      id,
      user_id: userId,
    })
    return meal
  } catch (error) {
    return res.status(400).send({
      message: JSON.parse(error.message),
    })
  }
}
