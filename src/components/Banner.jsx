import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative flex items-center justify-between bg-[#e8f2f6] px-6 py-3">
      <p className="text-sm font-medium text-[#013d52]">
        <strong className="font-semibold text-[#01627a]">Laravel Meetup</strong> — Join us in Peshawar at <span className="font-semibold text-[#01627a]">AntonX</span> on October 18th!
      </p>
      <button onClick={() => setVisible(false)} className="cursor-pointer p-2 hover:text-[#014659]">
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
