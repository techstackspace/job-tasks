import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,_#F28211_0%,_#C93106_100%)] px-6 py-10 text-white">
      <div className="mx-auto mb-10 flex max-w-6xl flex-col justify-between gap-8 text-sm md:flex-row">
        <div className="text-center md:text-left">
          <Image
            src="/images/billia-footer-logo.png"
            alt="billia logo"
            width={181.6}
            height={75}
            className="mx-auto mb-2 md:mx-0"
          />
          <p className="mx-auto md:mx-0 md:w-2/3">
            Our all-in-one app for bills, airtime, data, and smart payments —
            powered by Billia AI.
          </p>

          <div className="mt-5 flex items-center justify-center gap-10 md:justify-start">
            <a
              href="https://facebook.com/techstackmedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TechStack Media on Facebook"
            >
              <Image
                src="/images/facebook.svg"
                width={24}
                height={24}
                alt="facebook icon"
              />
            </a>
            <a
              href="https://instagram.com/techstackmedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TechStack Media on Instagram"
            >
              <Image
                src="/images/instagram.svg"
                width={24}
                height={24}
                alt="facebook icon"
              />
            </a>
            <a
              href="https://x.com/techstackmedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TechStack Media on X (Twitter)"
            >
              <Image
                src="/images/twitter.svg"
                width={22}
                height={22}
                alt="X (formerly Twitter) icon"
              />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h5 className="mb-2 font-semibold">Company</h5>
          <ul className="space-y-3">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h5 className="mb-2 font-semibold">Legal</h5>
          <ul className="space-y-1">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h5 className="mb-2 font-semibold">Contact Us</h5>
          <p>BilliaInfo@gmail.com</p>
          <p>08023437727</p>
        </div>
      </div>

      <div className="relative top-7 mx-auto max-w-6xl border border-t-0 border-white"></div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-2 text-center text-xs md:flex-row">
        <p>© 2025 Billia Technologies. All rights reserved.</p>
        <p>Product of SmartRob Technologies Limited</p>
      </div>
    </footer>
  )
}

export default Footer
