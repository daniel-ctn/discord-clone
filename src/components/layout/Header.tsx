import { FC } from 'react'
import { MenuIcon } from '@heroicons/react/solid'

import logo from 'assests/icon_discord_2.svg'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between bg-discord_blue px-6">
      <a href="/">
        <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
      </a>
      <nav className="hidden space-x-6 md:space-x-8 text-white lg:flex">
        <a href="/" className="link">
          Download
        </a>
        <a href="/" className="link">
          Why Discord?
        </a>
        <a href="/" className="link">
          Nitro
        </a>
        <a href="/" className="link">
          Safety
        </a>
        <a href="/" className="link">
          Support
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="button__white">
          Login to Discord
        </button>
        <MenuIcon className="inline lg:hidden h-8 w-8 text-white" />
      </div>
    </header>
  )
}

export default Header
