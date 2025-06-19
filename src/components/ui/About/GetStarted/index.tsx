import Image from 'next/image'

const GetStarted = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
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
            Billia AI, and you've got the smartest payment experience available
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
      </div>
    </section>
  )
}

export default GetStarted
