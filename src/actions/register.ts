'use server'

import { hash } from 'bcryptjs'

import type { FormDataRegister } from '@/app/(auth)/sign-up/page'
import { db } from '@/lib/prisma'

interface RegisterResponse {
  status: boolean
  message: string
}

export async function register(
  formData: FormDataRegister
): Promise<RegisterResponse> {
  try {
    const user = await db.user.findUnique({ where: { email: formData.email } })
    if (user) return { status: false, message: 'Email já cadastrado' }

    const passwordHash = await hash(formData.password, 10)
    await db.user.create({ data: { ...formData, password: passwordHash } })

    return { status: true, message: 'Cadastro realizado com sucesso' }
  } catch (error) {
    console.log(error)
    return {
      status: false,
      message: 'Algo deu errado tente novamente mais tarde',
    }
  }
}
