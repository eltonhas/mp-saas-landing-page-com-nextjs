import { compare } from 'bcryptjs'
import { db } from './prisma'

interface User {
  id: string
  email: string
  name: string
}

export async function findUserByCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const response = await db.user.findFirst({
    where: {
      email,
    },
  })

  if (!response) {
    return null
  }

  const isValidPassword = await compare(password, response.password)

  if (!isValidPassword) {
    return null
  }

  return {
    id: response.id,
    email: response.email,
    name: response.name,
  }
}
