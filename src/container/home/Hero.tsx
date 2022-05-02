import { FC } from 'react'
import { DownloadIcon } from '@heroicons/react/solid'

import heroImg from 'assests/hero_bg.webp'

const Hero: FC = () => {
  return (
    <section className="relative pb-8 md:pb-0">
      <div className="h-screen justify-center p-7 py-9 md:flex md:h-[83vh]">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-6xl font-extrabold uppercase text-white tracking-wide">
            Imagine a place...
          </h1>
          <h2 className="w-full text-lg tracking-wide text-white lg:max-w-3xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row">
            <button className="flex items-center justify-center rounded-full bg-white py-4 px-8 text-lg font-medium transition duration-200 ease-in-out hover:text-discord_blurple hover:shadow-2xl focus:outline-none">
              <DownloadIcon className="mr-2 w-6" />
              Download for Windows
            </button>
            <button className="flex items-center justify-center rounded-full bg-gray-900 py-4 px-8 text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-gray-800 hover:shadow-2xl focus:outline-none">
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
