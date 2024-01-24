'use client';
import BasicFeatureSection from '@/components/sections/basic-features';
import HowToUseSection from '@/components/sections/how-to-use';
import ModelsUsedSection from '@/components/sections/models-used';
import SecuritySection from '@/components/sections/security';
import { FeatureIcon } from '@/components/ui';

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <BasicFeatureSection />
      <HowToUseSection />
      <ModelsUsedSection />
      <SecuritySection />
    </div>
  );
}
