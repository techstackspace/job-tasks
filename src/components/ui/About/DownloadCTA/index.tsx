import Image from 'next/image'

const DownloadCTA = () => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="mb-2 text-2xl font-bold">Ready to simplify your bills?</h2>
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
  )
}

export default DownloadCTA
