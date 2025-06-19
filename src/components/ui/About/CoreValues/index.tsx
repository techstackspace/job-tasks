import Image from 'next/image'

const CoreValues = () => {
  return (
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
              Everything we build starts with our users' needs and experience in
              mind.
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
  )
}

export default CoreValues
