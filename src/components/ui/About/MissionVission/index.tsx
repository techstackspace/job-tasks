import Image from 'next/image'

const MissionVision = () => {
  return (
    <section className="bg-white px-4">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
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
      </div>
    </section>
  )
}

export default MissionVision
