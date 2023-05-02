import { Meal } from './meal'

export class User {
  id: string
  name: string
  created_at: Date
  meals?: Meal[]
}
