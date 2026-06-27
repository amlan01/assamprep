import { PlatformFeaturesSection } from '@/components/sections/PlatformFeaturesSection';
import { AnalyticsDashboardSection } from '@/components/sections/AnalyticsDashboardSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { StudentBenefitsSection } from '@/components/sections/StudentBenefitsSection';

export const metadata = {
  title: 'Features & Analytics | AssamPrep',
  description: 'Discover the features and advanced analytics dashboard that will help you ace the exams.',
};

export default function FeaturesPage() {
  return (
    <>
      <div className="bg-background">
        <PlatformFeaturesSection />
        <AnalyticsDashboardSection />
        <HowItWorksSection />
        <StudentBenefitsSection />
      </div>
    </>
  );
}
