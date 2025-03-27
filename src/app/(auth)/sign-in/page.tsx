'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { signIn } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/app/icon.svg'

import { Card } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { login } from '@/actions/login'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Digite um email válido' })
    .min(2, { message: 'Digite seu email' })
    .max(50),
  password: z.string().min(6, { message: 'Minimo de 6 caracteres' }).max(50),
})

export type FormDataLogin = z.infer<typeof formSchema>

export default function SignIn() {
  const session = useSession()
  const form = useForm<FormDataLogin>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: FormDataLogin) {
    // try {
    const response = await login(values)
    // } catch (error) {
    //   toast.error('Algo deu errado tente novamente mais tarde')
    // }
  }

  console.log(session)

  return (
    <main className="container mx-auto font-sans ">
      <div className="flex items-center justify-center flex-col h-screen space-y-4">
        <div className="flex items-center gap-3">
          <Image src={Icon} alt="Icon" className="size-6" />
          <span className="font-bold text-xl">LivroSaaS</span>
        </div>
        <Card className="px-6 py-8 flex flex-col gap-10 w-3/4 lg:w-1/2">
          <div>
            <h1 className="font-semibold text-xl text-foreground">
              Boas vindas
            </h1>
            <h2 className="text-muted-foreground text-sm">
              Faça seu login com email e senha
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="eu@exemplo.com.br" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
          <p className="text-xs text-muted-foreground text-center">
            Ao continuar, você concorda com nossos Termos de Uso e nossa
            Política de Privacidade.
          </p>
        </Card>
        <p className="text-xs text-muted-foreground">
          Não possui cadastro?{' '}
          <Link href={'/sign-up'} className="font-bold">
            Registre-se
          </Link>
        </p>
      </div>
    </main>
  )
}
