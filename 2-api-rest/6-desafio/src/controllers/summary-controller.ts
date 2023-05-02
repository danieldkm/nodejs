import { summaryUC } from '../usecases/summary'

export const indexSummary = async (req, res) => {
  const { userId } = req.cookies
  const { id } = req.params

  try {
    const meal = await summaryUC({
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
