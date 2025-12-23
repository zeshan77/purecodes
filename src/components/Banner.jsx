import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

const message = {
    heading: 'LARAVEL MEETUP 2026',
    description: 'Join us in Peshawar at June 7th to see what’s coming next',
}

const Banner = () => {
    const [visible, setVisible] = useState(true)

    if (!visible) return null

  return (
    <div className="relative flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1 dark:bg-gray-800">
      <p className="text-sm/6 text-white">
        <a href="https://www.purecodes.net/">
          <strong className="font-semibold">{message.heading}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          {message.description}&nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={() => setVisible(false)} className="-m-3 p-3 focus-visible:-outline-offset-4 hover:cursor-pointer">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  )
}

export default Banner
