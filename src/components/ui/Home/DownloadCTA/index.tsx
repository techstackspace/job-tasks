import Image from 'next/image'

const DownloadCTA = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-yellow-100 px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-2 text-2xl font-bold">Download Billia Today</h2>
            <p className="mb-6 text-sm text-gray-600">
              Fast payments, smart reminders, and secure wallet tools — all
              inside Billia
            </p>
            <div className="mb-6 flex items-center justify-center space-x-4 md:justify-start">
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
              className="relative top-11 mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadCTA
