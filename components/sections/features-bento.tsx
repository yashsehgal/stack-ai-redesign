'use client';
import { SectionContainer, ViewContainer } from '../layouts';
import { BentoCard, CTAContainer, CTADescription, CTAHeadline } from '../ui';
import { AnalyseWebsiteUsableExample } from '../ui/usables';

export default function FeaturesBento() {
  return (
    <SectionContainer id="features-bento">
      <ViewContainer>
        <CTAContainer>
          <CTAHeadline>
            There&apos;re a lot of magical things you can do 🔮
          </CTAHeadline>
          <CTADescription>
            Discover endless possibilities with a myriad of enchanting feats at
            your fingertips.
          </CTADescription>
        </CTAContainer>
        <div className="mt-24">
          <AnalyseWebsiteUsableExample />
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
