import CoreValues from '@/components/ui/About/CoreValues'
import DownloadCTA from '@/components/ui/About/DownloadCTA'
import GetStarted from '@/components/ui/About/GetStarted'
import Hero from '@/components/ui/About/Hero'
import MissionVision from '@/components/ui/About/MissionVission'

export default function About() {
  return (
    <main className="bg-yellow-100 font-sans text-gray-900">
      <Hero />
      <GetStarted />
      <MissionVision />
      <CoreValues />
      <DownloadCTA />
    </main>
  )
}
