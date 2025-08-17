'use client'

import { 
  Header,
  HeroSection, 
  VideoSection, 
  RevolutionizingSection, 
  CNCMadeEasySection, 
  PopularDetailsSection
} from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <VideoSection />
      <RevolutionizingSection />
      <CNCMadeEasySection />
      <PopularDetailsSection />
    </main>
  )
}
