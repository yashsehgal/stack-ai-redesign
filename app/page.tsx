'use client';
import BasicFeatureSection from '@/components/sections/basic-features';
import CTASection from '@/components/sections/cta';
import DataLoadersSection from '@/components/sections/data-loaders';
import FeaturesBento from '@/components/sections/features-bento';
import FooterSection from '@/components/sections/footer';
import GetStartedWithDocumentationSection from '@/components/sections/get-started-docs';
import HeroSection from '@/components/sections/hero';
import HowToUseSection from '@/components/sections/how-to-use';
import ModelsUsedSection from '@/components/sections/models-used';
import SecuritySection from '@/components/sections/security';
import TestimonialSection from '@/components/sections/testimonials';

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 gap-12">
      <HeroSection />
      <BasicFeatureSection />
      <FeaturesBento />
      <HowToUseSection />
      <ModelsUsedSection />
      <GetStartedWithDocumentationSection />
      <SecuritySection />
      <DataLoadersSection />
      <TestimonialSection />
      <FooterSection />
      <CTASection />
    </div>
  );
}
