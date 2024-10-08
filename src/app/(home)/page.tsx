import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

import Hero from '@/assets/hero.png'
import { Check } from 'lucide-react'
import PlanCard from '@/components/plan-card'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="font-sans max-w-5xl px-6 sm:mx-auto lg:px-0 pb-10">
      <section className="flex flex-col gap-4 items-center pb-16">
        <h1 className="font-bold text-2xl md:text-5xl">
          Simplifique Seus Estudos
        </h1>
        <span className="text-center text-muted-foreground md:text-xl">
          Deixe que nós fazermos a curadoria para você. Assine nossa plataforma
          e receba todos os meses um ebook novo de programação.
        </span>
      </section>
      <section className="flex flex-col gap-4 pb-16">
        <div className="flex items-center justify-center gap-2 w-full">
          <Input placeholder="Coloque seu email" className="max-w-[50%] " />
          <Button className="font-normal">Assine Agora</Button>
        </div>
        <p className="text-xs text-center text-slate-400 md:text-base">
          Comece sua assinatura agora mesmo. Cancele quando quiser.{' '}
        </p>
      </section>
      <section className="flex flex-col items-center justify-center w-full pb-16">
        <h1 className="font-bold text-2xl md:text-5xl">Como funciona?</h1>
        <div className="flex items-center justify-between">
          <Image src={Hero} alt="Hero" className="max-w-[50%]" />
          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-4 text-muted-foreground md:text-xl">
              Acesso a 1 ebook por mês <Check className="text-green-500" />
            </div>
            <div className="flex gap-4 text-muted-foreground md:text-xl">
              Curadoria especial <Check className="text-green-500" />
            </div>
            <div className="flex gap-4 text-muted-foreground md:text-xl">
              Cancele quando quiser <Check className="text-green-500" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 w-full pb-16">
        <h1 className="font-bold text-2xl md:text-5xl">
          Preço Simples e Transparente
        </h1>
        <span className="text-center text-muted-foreground md:text-xl">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.
        </span>
      </section>
      <section className="w-full flex items-center justify-center pb-16">
        <PlanCard />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 w-full pb-16">
        <h1 className="font-bold text-4xl text-center md:text-5xl">
          Pronto Para Mudar Sua Vida?{' '}
        </h1>
        <span className="text-xl text-center text-muted-foreground pb-5 md:text-2xl">
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos
        </span>
        <Button className="w-[75%] font-normal md:w-[30%]">Assine Agora</Button>
        <span className="text-[10px] text-center text-muted-foreground md:text-base">
          Comece sua assinatura agora mesmo. Cancele quando quiser.{' '}
        </span>
      </section>
      <Footer />
    </main>
  )
}
