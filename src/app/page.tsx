import AI from '@/components/ui/Home/AI'
import DownloadCTA from '@/components/ui/Home/DownloadCTA'
import Features from '@/components/ui/Home/Features'
import Hero from '@/components/ui/Home/Hero'
import Testimonial from '@/components/ui/Home/Testimonial'

export default function Home() {
  return (
    <main className="font-poppins bg-yellow-100 text-gray-900">
      <Hero />
      <Features />
      <AI />
      <Testimonial />
      <DownloadCTA />
    </main>
  )
}
