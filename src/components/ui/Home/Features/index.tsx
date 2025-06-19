import Image from 'next/image'

const Features = () => {
  return (
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
  )
}

export default Features
