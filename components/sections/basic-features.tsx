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

const BasicFeatureList: FeatureContentProps[] = [
  {
    icon: 'no-code',
    title: 'No-Code Required',
    description:
      'Build AI applications with a drag and drop interface. No coding required.Deploy your applications using Customizable UIs or ready to use API endpoints.',
  },
  {
    icon: 'prebuilt',
    title: 'Pre-built Use Cases',
    description:
      'Leverage an extensive library of Templates inspired by real use cases. Get immediate results and customize to your needs.',
  },
  {
    icon: 'security',
    title: 'Enterprise-Grade Security',
    description:
      'Stack AI is SOC2, HIPAA, and GDPR compliant, and has DPAs signed with the main AI providers, such as Anthropic and OpenAI.',
  },
  {
    icon: 'support',
    title: 'White-Glove Support',
    description:
      'Deploy AI applications with the help of MIT engineers and PhDs with over 10 years of experience in the field.',
  },
];

export default function BasicFeatureSection() {
  return (
    <SectionContainer id="features">
      <ViewContainer className="flex flex-row items-start justify-between max-lg:grid max-lg:gap-24 max-xl:relative">
        <CTAContainer className="max-xl:sticky max-xl:top-12 max-lg:top-0 max-lg:relative">
          <CTAHeadline>Unlock AI Innovation Without Code</CTAHeadline>
          <CTADescription>
            Create advanced applications with our no-code platform, featuring
            pre-built templates, enterprise-grade security, and expert
            white-glove support. Experience the simplified power of AI in just a
            few clicks.
          </CTADescription>
          <CTAList>
            <Button size="lg" withArrow>
              Get Started
            </Button>
          </CTAList>
        </CTAContainer>
        <div className="feature-content-grid grid grid-cols-2 items-start gap-12 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:w-fit max-lg:mx-auto">
          {BasicFeatureList.map(
            (feature: FeatureContentProps, index: number) => {
              return <FeatureCard {...feature} key={index} />;
            },
          )}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
