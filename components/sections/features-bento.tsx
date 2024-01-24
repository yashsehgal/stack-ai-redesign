'use client';
import { SectionContainer, ViewContainer } from '../layouts';
import { CTAContainer, CTADescription, CTAHeadline } from '../ui';
import {
  AnalyseReportsUsableExample,
  AnalyseWebsiteUsableExample,
} from '../ui/usables';

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
        <div className="mt-24 grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 max-lg:w-fit max-lg:mx-auto max-lg:gap-6">
          <AnalyseWebsiteUsableExample />
          <AnalyseReportsUsableExample />
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
