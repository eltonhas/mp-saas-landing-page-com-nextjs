'use server'

import { signIn } from '@/auth'
import type { FormDataLogin } from '@/app/(auth)/sign-in/page'

export async function login(data: FormDataLogin) {
  try {
    await signIn('credentials', { email: data.email, password: data.password })
  } catch (error) {
    console.log(error)
    return {
      status: false,
      message: 'Algo deu errado tente novamente mais tarde',
    }
  }
}
