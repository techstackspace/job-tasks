import Image from 'next/image'

const AI = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-3xl bg-red-100 p-6 md:grid-cols-2">
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
            From paying school fees to buying airtime or electricity, Billia AI
            makes every payment smarter, faster, and stress-free — just by
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
          <button className="mt-6 w-full cursor-pointer rounded-full bg-[linear-gradient(180deg,_#F28211_0%,_#C93106_100%)] px-6 py-2 text-white hover:bg-orange-600 sm:w-48">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default AI
