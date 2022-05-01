import { FC } from 'react'
import { DownloadIcon } from '@heroicons/react/solid'

import heroImg from 'assests/hero_bg.webp'

const Hero: FC = () => {
  return (
    <section className="relative pb-8 md:pb-0">
      <div className="h-screen p-7 py-9 md:flex md:h-[83vh] justify-center">
        <div className="flex flex-col gap-10 justify-center">
          <h1 className="text-5xl font-bold text-white">Your place to talk</h1>
          <h2 className="w-full text-lg font-light tracking-wide text-white lg:max-w-3xl">
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row">
            <button className="flex w-60 items-center justify-center rounded-full bg-white p-4 text-lg font-medium transition duration-200 ease-in-out hover:text-discord_blurple hover:shadow-2xl focus:outline-none">
              <DownloadIcon className="mr-2 w-6" />
              Download for Mac
            </button>
            <button className="flex w-72 items-center justify-center rounded-full bg-gray-900 p-4 text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-gray-800 hover:shadow-2xl focus:outline-none">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <img
          src={heroImg}
          alt="hero background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

export default Hero
