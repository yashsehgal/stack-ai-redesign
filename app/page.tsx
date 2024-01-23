'use client';
import BasicFeatureSection from '@/components/sections/basic-features';
import HowToUseSection from '@/components/sections/how-to-use';
import { FeatureIcon } from '@/components/ui';

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <BasicFeatureSection />
      <HowToUseSection />
    </div>
  );
}
