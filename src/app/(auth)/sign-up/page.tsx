'use client'

import { startTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { toast } from 'sonner'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { register } from '@/actions/register'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Minimo de 2 caracteres' }).max(50),
  email: z
    .string()
    .email({ message: 'Digite um email válido' })
    .min(2, { message: 'Digite seu email' })
    .max(50),
  password: z.string().min(6, { message: 'Minimo de 6 caracteres' }).max(50),
})

export type FormDataRegister = z.infer<typeof formSchema>

export default function SignUp() {
  const router = useRouter()
  const form = useForm<FormDataRegister>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: FormDataRegister) {
    const response = await register(values)

    if (!response.status) return toast.error(response.message)

    startTransition(() => {
      toast.success(response.message)

      form.reset({
        name: '',
        email: '',
        password: '',
      })

      router.push('/sign-in')
    })
  }

  return (
    <main className="container mx-auto font-sans ">
      <div className="flex items-center justify-center flex-col h-screen space-y-4 ">
        <div className="flex items-center gap-3">
          <Image src={Icon} alt="Icon" className="size-6" />
          <span className="font-bold text-xl">LivroSaaS</span>
        </div>
        <Card className="px-6 py-8 flex flex-col gap-10 w-3/4 lg:w-1/2">
          <div>
            <h1 className="font-semibold text-xl text-foreground">
              Cadastre-se
            </h1>
            <h2 className="text-muted-foreground text-sm">
              Faça seu cadastro gratuitamente
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Fulano de Tal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                Registrar
              </Button>
            </form>
          </Form>
          <p className="text-xs text-muted-foreground text-center">
            Ao continuar, você concorda com nossos Termos de Uso e nossa
            Política de Privacidade.
          </p>
        </Card>
        <p className="text-xs text-muted-foreground">
          Já possui cadastro?{' '}
          <Link href={'/sign-in'} className="font-bold">
            Faça o Login
          </Link>
        </p>
      </div>
    </main>
  )
}
