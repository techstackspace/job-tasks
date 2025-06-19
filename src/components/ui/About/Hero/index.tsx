import Image from 'next/image'

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 text-center">
      <div className="flex flex-wrap items-center justify-center gap-10 py-10 md:gap-5 xl:justify-between xl:gap-5">
        <Image
          src="/images/about-hero.png"
          alt="Hero Woman"
          width={300}
          height={300}
        />
        <div>
          <h1 className="mb-4 text-3xl font-bold">
            Reimagining How Nigerians Pay, One Bill at a Time
          </h1>
          <p className="max-w-xl text-gray-700">
            At Billia, we're building more than just a payment app — we're
            creating a smarter, simpler way for everyday Nigerians to stay
            connected, pay their bills, and take control of their financial
            lives.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
