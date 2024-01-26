'use client';
import { SectionContainer, ViewContainer } from '../layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
  FeatureCard,
  FeatureContentProps,
} from '../ui';

const SecurityFeaturesList: FeatureContentProps[] = [
  {
    icon: 'infra',
    title: 'Dedicated Infrastructure.',
    description:
      'AI models run with the highest levels of privacy and security with Azure OpenAI and AWS Bedrock.',
  },
  {
    icon: 'no-code',
    title: 'No Training Of Your Data.',
    description:
      'We ensure that your data is not used for training AI models through data processing addendums (DPAs).',
  },
  {
    icon: 'encryption',
    title: 'Data Encryption.',
    description:
      'All your data secured using AES-256 encryption protocol at rest and in transit (TLS 1.3.).',
  },
  {
    icon: 'sso',
    title: 'Custom SSO.',
    description:
      'Connect your Identity Provider to enable login and role-mapping through SAML protocol.',
  },
  {
    icon: 'data-retention',
    title: 'Data Retention Policies.',
    description:
      'You have the control to set data retention durations, allowing you to decide how long we retain your data.',
  },
  {
    icon: 'threat',
    title: 'Vulnerability & Threat Tracking.',
    description:
      'Vulnerabilities and threats tracked to resolution, with scans performed on a regular basis.',
  },
];

export default function SecuritySection() {
  return (
    <SectionContainer id="security" className="bg-black">
      <ViewContainer className="flex flex-row items-start justify-between gap-12 max-lg:grid max-lg:gap-24 max-xl:relative">
        <CTAContainer className="max-xl:sticky max-xl:top-36 max-lg:top-0 max-lg:relative">
          <CTAHeadline sectionTheme="dark">
            Secure AI applications for every Enterprise
          </CTAHeadline>
          <CTADescription sectionTheme="dark">
            We prioritize security and privacy for your company. Ensure safe
            connectivity with your databases, while maintaining stringent
            controls over data processing.
          </CTADescription>
          <CTAList>
            <Button
              variant="gloss"
              withArrow
              size="lg"
              onClick={() => window.open('https://www.stack-ai.com/')}>
              Start for free
            </Button>
          </CTAList>
        </CTAContainer>
        <div className="security-features-content-grid grid grid-cols-2 items-start gap-12 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:w-fit max-lg:mx-auto">
          {SecurityFeaturesList.map(
            (feature: FeatureContentProps, index: number) => {
              return (
                <FeatureCard key={index} {...feature} sectionTheme="dark" />
              );
            },
          )}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
