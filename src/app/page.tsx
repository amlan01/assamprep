import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABannerSection } from '@/components/sections/CTABannerSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
