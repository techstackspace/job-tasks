import Image from 'next/image'

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row">
      <div className="w-full max-w-xl">
        <p className="mb-2 text-xs font-medium text-orange-600">
          One App. Every Payment. Zero Stress.
        </p>
        <h1 className="mb-4 text-4xl leading-tight font-extrabold text-gray-900">
          Simplify Every Payment
          <br />
          with One Powerful App
        </h1>
        <p className="mb-6 text-sm text-gray-700">
          Billia lets you pay bills, top up airtime, buy data, and manage your
          wallet — all in one place. Fast. Secure. Reliable.
        </p>
        <div className="mb-4 flex justify-center space-x-4 md:justify-start">
          <Image
            src="/images/google-play-badge.png"
            alt="Google Play"
            width={152.4}
            height={51.6}
          />
          <Image
            src="/images/app-store-badge.png"
            alt="App Store"
            width={156}
            height={52.2}
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/users.png"
            alt="users images"
            width={40}
            height={40}
          />
          <p className="text-xs font-medium text-gray-900">
            Join 20,000+ Nigerians making payments smarter every day.
          </p>
        </div>
      </div>

      <div className="mt-12 lg:mt-0">
        <Image
          src="/images/billia-app-preview.png"
          alt="App Preview"
          width={589.4246215820312}
          height={800}
          className="rounded-xl"
        />
      </div>
    </section>
  )
}

export default Hero
