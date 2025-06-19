'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Arlene McCoy',
    duration: 'One Year of using Billia',
    text: 'Before Billia, I always missed my PHCN payment dates. Now I get reminders, and I can repeat past payments without filling forms. It’s efficient, secure, and perfect for people like me who forget easily.',
    date: '4 June 2025',
    rating: '4.7',
    image: '/images/avatar-arlene.png',
  },
  {
    name: 'Savannah Nguyen',
    duration: 'Six Months of using Billia',
    text: 'I was surprised how fast wallet funding worked. I transferred from my bank to the Billia virtual account, and the money reflected instantly. I’ve used it to pay my cable and internet bills ever since.',
    date: '24 April 2025',
    rating: '4.5',
    image: '/images/avatar-savannah.png',
  },
  {
    name: 'Wade Warren',
    duration: 'Two Months of using Billia',
    text: 'The virtual dollar card helped me subscribe to tools I couldn’t pay for before. Works instantly.',
    date: '15 April 2025',
    rating: '4.8',
    image: '/images/avatar-wade.png',
  },
  {
    name: 'Courtney Henry',
    duration: 'Five Months of using Billia',
    text: 'Love the Billia AI – I literally just tell it to pay my DSTV, and it’s done. No stress at all.',
    date: '2 May 2025',
    rating: '4.6',
    image: '/images/avatar-courtney.png',
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Group testimonials by itemsPerSlide
  const grouped = []
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    grouped.push(testimonials.slice(i, i + itemsPerSlide))
  }

  const maxIndex = grouped.length - 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  return (
    <section className="bg-[linear-gradient(180deg,_#F28211_0%,_#C93106_100%)] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full border border-white bg-transparent px-4 py-1 text-xs font-medium text-white">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold">What Our Customers Says</h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-md"
          >
            <Image
              src="/images/arrow-left.svg"
              width={24}
              height={24}
              alt="left arrow"
            />
          </button>

          {/* Carousel */}
          <div className="w-full max-w-4xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${grouped.length * 100}%`,
                transform: `translateX(-${currentIndex * (100 / grouped.length)}%)`,
              }}
            >
              {grouped.map((group, idx) => (
                <div
                  key={idx}
                  className="flex w-full flex-shrink-0 gap-6 px-2"
                  style={{ width: `${100 / grouped.length}%` }}
                >
                  {group.map((t, i) => (
                    <div
                      key={i}
                      className="relative w-full rounded-2xl bg-white p-6 text-gray-800 shadow-md md:w-1/2"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={53}
                          height={53}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">{t.name}</h3>
                          <p className="text-sm text-gray-500">{t.duration}</p>
                        </div>
                      </div>
                      <p className="mb-6 text-sm text-gray-700">{t.text}</p>
                      <div className="flex items-center justify-between text-sm">
                        <p className="font-medium">{t.date}</p>
                        <p className="flex items-center gap-1">
                          <span className="text-yellow-500">⭐</span> {t.rating}
                          /5.0
                        </p>
                      </div>
                      <span className="absolute top-6 right-6 text-4xl font-bold text-orange-500">
                        ”
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-md"
          >
            <Image
              src="/images/arrow-left.svg"
              width={24}
              height={24}
              alt="right arrow"
              className="rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
