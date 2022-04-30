import { FC } from 'react'

import logo from 'assests/discord-new-logo.webp'
import { MenuIcon } from '@heroicons/react/solid'

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between bg-discord_blue px-6">
      <a href="/">
        <img src={logo} alt="logo" className="h-28 w-48 object-contain" />
      </a>
      <nav className="hidden space-x-6 text-white lg:flex">
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
          Login
        </button>
        <MenuIcon className="inline lg:hidden h-8 w-8 text-white" />
      </div>
    </header>
  )
}

export default Header
