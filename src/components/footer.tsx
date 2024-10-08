import IconPage from '@/app/icon.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-3">
        <Image src={IconPage} alt="Icon" className="size-6" />
        <span className="font-bold text-xl">LivroSaaS</span>
      </div>
      <span className="text-center text-xs text-muted-foreground">
        © 2024 LivroSaaS. Todos os direitos reservados.
      </span>
    </div>
  )
}
