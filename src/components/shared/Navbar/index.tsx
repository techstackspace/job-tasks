'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact Us' },
  ]

  return (
    <header className="bg-yellow-100 p-6 shadow-sm lg:shadow-none">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Image
          src="/images/billia-icon.png"
          width={145}
          height={60}
          alt="billia icon"
        />

        {/* Desktop nav */}
        <nav className="hidden space-x-6 text-sm text-gray-600 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className={`hover:text-orange-600 ${
                pathname === href ? 'text-orange-600' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="cursor-pointer text-2xl text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mt-4 space-y-3 text-sm text-gray-700 md:hidden">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block rounded px-4 py-2 hover:bg-orange-100 ${
                pathname === href ? 'font-semibold text-orange-600' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
