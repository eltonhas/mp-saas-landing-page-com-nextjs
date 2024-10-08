import Image from 'next/image'

import Icon from '@/app/icon.svg'
import Link from 'next/link'
import { Button } from './ui/button'
import { DropdownMenuCuston } from './dropdown-custon'

export function Header() {
  return (
    <header className="font-sans my-11 px-6 w-full  flex items-center justify-between sm:px-11">
      <div className="flex items-center gap-3">
        <Image src={Icon} alt="Icon" className="size-6" />
        <span className="font-bold text-xl">LivroSaaS</span>
      </div>
      <div className="sm:hidden flex">
        <DropdownMenuCuston />
      </div>
      <div className="items-center gap-6 hidden sm:flex">
        <Link href={'#'} className="text-sm">
          Faturamento
        </Link>
        <Link href={'#'} className="text-sm">
          Preço
        </Link>
        <Button variant={'outline'}>Login</Button>
      </div>
    </header>
  )
}
