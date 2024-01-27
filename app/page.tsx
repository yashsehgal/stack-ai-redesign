'use client';
import {
  BasicFeatureSection,
  BuildIdeaSection,
  CTASection,
  DataLoadersSection,
  FeaturesBento,
  FooterSection,
  GetStartedWithDocumentationSection,
  HeroSection,
  HowToUseSection,
  InvestorSection,
  TestimonialSection,
  ModelsUsedSection,
  PartnerSection,
  SecuritySection,
} from '@/components/sections';

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 gap-8 max-md:gap-0">
      <HeroSection />
      <BasicFeatureSection />
      <FeaturesBento />
      <HowToUseSection />
      <BuildIdeaSection />
      <ModelsUsedSection />
      <GetStartedWithDocumentationSection />
      <PartnerSection />
      <SecuritySection />
      <DataLoadersSection />
      <TestimonialSection />
      <InvestorSection />
      <FooterSection />
      <CTASection />
    </div>
  );
}
