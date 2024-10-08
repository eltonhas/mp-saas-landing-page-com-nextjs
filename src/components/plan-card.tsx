import { Check } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'

export default function PlanCard() {
  return (
    <Card className="sm:w-[50%] w-[65%]">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle>Plano Pro Premium VIP</CardTitle>
        <CardDescription>
          Tudo que você precisa para seus estudos
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl">
          R$ 29{' '}
          <span className="text-base text-muted-foreground font-normal">
            /mês
          </span>
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Check className="text-green-500 size-5" />{' '}
            <span className="text-muted-foreground">1 ebook por mês</span>
          </div>
          <div className="flex gap-2 items-center">
            <Check className="text-green-500 size-5" />{' '}
            <span className="text-muted-foreground">Curadoria especial</span>
          </div>
          <div className="flex gap-2 items-center">
            <Check className="text-green-500 size-5" />{' '}
            <span className="text-muted-foreground">Aceso ilimitado</span>
          </div>
          <div className="flex gap-2 items-center">
            <Check className="text-green-500 size-5" />{' '}
            <span className="text-muted-foreground">
              Cancele a qualquer momento
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full font-normal">Assine agora</Button>
      </CardFooter>
    </Card>
  )
}
