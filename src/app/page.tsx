import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#FFF9F3] font-sans text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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
          <div className="mb-4 flex space-x-4">
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
            <p className="text-xs font-medium text-[#2D2D2D]">
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

      {/* Features Section */}
      <section className="bg-white px-4 py-16">
        <h2 className="mb-12 text-center text-2xl font-bold">
          Everything You Need to Pay Smarter
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-blue-100 p-6">
            <h3 className="mb-2 font-semibold">All-in-One Bill Payments</h3>
            <p className="text-sm text-gray-700">
              Pay for electricity, TV, internet, education, and betting — all in
              seconds.
            </p>
            <Image
              src="/images/smilling-woman-on-phone-apps.png"
              width={240.48031616210938}
              height={257.6083068847656}
              alt="Smilling woman on phone apps"
              className="relative top-6 mx-auto"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-green-100 p-6">
            <h3 className="mb-2 font-semibold">Airtime & Data Top-Up</h3>
            <p className="text-sm text-gray-700">
              Buy airtime and mobile data for yourself or others — instantly and
              globally.
            </p>
            <Image
              src="/images/airtime-data-topup.png"
              width={240.48031616210938}
              height={257.6083068847656}
              alt="airtime and data top-up"
              className="relative top-19 mx-auto"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-between rounded-xl bg-yellow-100 p-6 shadow md:col-span-2 lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2">
              <h3 className="mb-2 font-semibold">Virtual Dollar Card</h3>
              <p className="text-sm text-gray-700">
                Shop globally with your own secure virtual dollar card — perfect
                for subscriptions and online payments.
              </p>
            </div>
            <Image
              src="/images/billia-virtual-dollar-card.png"
              alt="virtual card"
              width={395}
              height={291}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-3xl bg-[#FFEDE7] p-6 md:grid-cols-2">
          <Image
            src="/images/billia-ai.png"
            width={355}
            height={448}
            alt="billia ai icon"
            className="mx-auto"
          />
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-xl font-semibold">
              Introducing Billia AI: Smarter, Faster, Personal
            </h2>
            <p className="mb-6 text-sm">
              From paying school fees to buying airtime or electricity, Billia
              AI makes every payment smarter, faster, and stress-free — just by
              asking.
            </p>
            <ul className="space-y-2 text-sm">
              <div className="flex gap-4">
                <Image
                  src="/images/quill-paper.svg"
                  width={24}
                  height={24}
                  alt="paper icon"
                />
                <span>Pay Bills by Typing a Command</span>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/bulb.svg"
                  width={24}
                  height={24}
                  alt="bulb icon"
                />
                <span>One-Tap Repeats</span>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/chat.svg"
                  width={24}
                  height={24}
                  alt="chat icon"
                />{' '}
                In-App Chat Assistance
              </div>
            </ul>
            <button className="mt-6 w-full rounded-full bg-[linear-gradient(180deg,_#F28211_0%,_#C93106_100%)] px-6 py-2 text-white hover:bg-orange-600 sm:w-48">
              Try It Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial />

      {/* Download CTA */}
      <section className="bg-[#FFF9F3] px-4 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-yellow-100 px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-2 text-2xl font-bold">Download Billia Today</h2>
              <p className="mb-6 text-sm text-gray-600">
                Fast payments, smart reminders, and secure wallet tools — all
                inside Billia
              </p>
              <div className="mb-6 flex items-center space-x-4">
                <Image
                  src="/images/google-play-badge.png"
                  alt="Google Play"
                  width={152}
                  height={52}
                />
                <Image
                  src="/images/app-store-badge.png"
                  alt="App Store"
                  width={156}
                  height={52}
                />
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <Image
                src="/images/billia-mobile-app.png"
                alt="Mobile Screens"
                width={537}
                height={706}
                className="mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
