// pages/about.tsx
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function About() {
  return (
    <main className="bg-[#FFF9F3] font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <div className="flex items-center justify-between">
          <Image
            src="/images/about-hero.png"
            alt="Hero Woman"
            width={300}
            height={300}
            className="mb-6"
          />
          <div>
            <h1 className="mb-4 text-3xl font-bold">
              Reimagining How Nigerians Pay, One Bill at a Time
            </h1>
            <p className="max-w-xl text-gray-700">
              At Billia, we’re building more than just a payment app — we’re
              creating a smarter, simpler way for everyday Nigerians to stay
              connected, pay their bills, and take control of their financial
              lives.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Why We Started</h2>
          <p className="mb-4 text-gray-700">
            We created Billia because we saw a real problem: people struggling
            with too many apps, missed due dates, and unreliable payment
            platforms.
          </p>
          <p className="text-gray-700">
            So we built one app that brings it all together — electricity,
            internet, school fees, airtime, and even a virtual dollar card. Add
            Billia AI, and you’ve got the smartest payment experience available
            today.
          </p>
        </div>
        <div>
          <Image
            src="/images/about-why.png"
            alt="Man on phone"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <Image
            src="/images/about-mission.png"
            alt="Team celebrating"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Our Mission & Vision</h2>
          <p className="mb-2">
            <strong>Mission:</strong> To make bill payments effortless,
            intelligent, and accessible for everyone across Nigeria — no matter
            their background or tech level.
          </p>
          <p>
            <strong>Vision:</strong> A future where anyone can manage their
            financial life from one simple, secure platform — powered by smart
            automation and trust.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-12 text-left text-2xl font-semibold">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-yellow-100 p-6 text-left">
              <h3 className="mb-2 font-bold">Simplicity</h3>
              <p className="text-sm text-gray-700">
                Payments should be fast, clear, and easy — no stress.
              </p>
              <Image
                src="/images/compass.png"
                alt="compass"
                width={75}
                height={75}
                className="relative top-6 left-6 ml-auto"
              />
            </div>
            <div className="rounded-xl bg-green-100 p-6 text-left">
              <h3 className="mb-2 font-bold">Trust</h3>
              <p className="text-sm text-gray-700">
                Your data and money are protected by real-time security and
                compliance.
              </p>
              <Image
                src="/images/padlock.png"
                alt="padlock"
                width={75}
                height={75}
                className="relative top-6 left-6 ml-auto"
              />
            </div>
            <div className="rounded-xl bg-red-100 p-6 text-left">
              <h3 className="mb-2 font-bold">Innovation</h3>
              <p className="text-sm text-gray-700">
                We use smart tools like Billia AI to make bill payments smarter
                every day.
              </p>
              <Image
                src="/images/brain.png"
                alt="brain"
                width={75}
                height={75}
                className="relative top-6 left-6 ml-auto"
              />
            </div>
            <div className="rounded-xl bg-blue-100 p-6 text-left">
              <h3 className="mb-2 font-bold">People First</h3>
              <p className="text-sm text-gray-700">
                Everything we build starts with our users’ needs and experience
                in mind.
              </p>
              <Image
                src="/images/handshake.png"
                alt="hand shake"
                width={75}
                height={75}
                className="relative top-6 left-6 ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-[#FFF9F3] px-6 py-16 text-center">
        <h2 className="mb-2 text-2xl font-bold">
          Ready to simplify your bills?
        </h2>
        <h2 className="mb-8 text-2xl font-bold">
          Download Billia and experience the smarter way to pay.
        </h2>
        <div className="flex justify-center space-x-4">
          <Image
            src="/images/google-play-badge.png"
            alt="Google Play"
            width={152.4}
            height={51.6}
            className=""
          />
          <Image
            src="/images/app-store-badge.png"
            alt="App Store"
            width={156}
            height={52.2}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
