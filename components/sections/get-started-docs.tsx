'use client';
import Image from 'next/image';
import { ScreenMockup, SectionContainer, ViewContainer } from '../layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
} from '../ui';

export default function GetStartedWithDocumentationSection() {
  return (
    <SectionContainer id="get-started-with-docs">
      <ViewContainer className="flex flex-row items-center justify-center gap-24">
        <ScreenMockup className="-ml-[400px]">
          <Image
            src="/media/docs-demo.svg"
            alt="get-started-with-docs-example-screenshot"
            priority
            className="rounded-xl border"
            width={1000}
            height={700}
          />
        </ScreenMockup>
        <div className="docs-section-content-wrapper">
          <CTAContainer>
            <CTAHeadline>Dive into Our Comprehensive Documentation</CTAHeadline>
            <CTADescription>
              Discover the vast capabilities of Stack AI by exploring our
              detailed documentation. From getting started guides to advanced
              features, our documentation is your go-to resource for seamless
              integration and harnessing the power of our platform. <br />
              <br />
              Empower your journey with Stack AI - the key to unlocking
              limitless possibilities in AI innovation!
            </CTADescription>
            <CTAList>
              <Button withArrow size="lg">
                Explore Stack AI Docs
              </Button>
            </CTAList>
          </CTAContainer>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
