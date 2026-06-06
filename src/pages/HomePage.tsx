import { HeroSection } from '@/components/home/HeroSection'
import { ProductSection } from '@/components/home/ProductSection'
import { PrinciplesSection } from '@/components/home/PrinciplesSection'
import { TimelineSection } from '@/components/home/TimelineSection'
import { CasesSection } from '@/components/home/CasesSection'
import { CredentialsSection } from '@/components/home/CredentialsSection'
import { CTASection } from '@/components/home/CTASection'
import { FAQSection } from '@/components/home/FAQSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <PrinciplesSection />
      <TimelineSection />
      <CasesSection />
      <CredentialsSection />
      <CTASection />
      <FAQSection />
    </>
  )
}
