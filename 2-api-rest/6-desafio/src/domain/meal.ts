export class Meal {
  id: string
  name: string
  description: string
  user_id: string
  fed_on: Date
  on_diet: boolean
  created_at: Date

  constructor(meal) {
    this.id = meal.id
    this.name = meal.name
    this.description = meal.description
    this.user_id = meal.user_id
    this.fed_on = meal.fed_on
    this.on_diet = meal.on_diet
    this.created_at = meal.created_at
  }

  toMap() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      user_id: this.user_id,
      fed_on: new Date(this.fed_on),
      on_diet: Boolean(this.on_diet),
      created_at: new Date(this.created_at),
    }
  }
}
