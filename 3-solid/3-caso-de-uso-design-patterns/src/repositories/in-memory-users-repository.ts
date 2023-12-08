import { Prisma, User } from '@prisma/client'
import { UsersRepository } from './users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: any = []

  async create(data: Prisma.UserCreateInput): Promise<User> {
    this.users.push(data)
    return data as User
  }

  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
}
