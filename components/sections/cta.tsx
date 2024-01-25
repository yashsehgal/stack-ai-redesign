'use client';
import { SectionContainer, ViewContainer } from '../layouts';
import { Button, CTAList } from '../ui';

export default function CTASection() {
  return (
    <SectionContainer id="cta-section" className="xl:h-[460px]">
      <ViewContainer>
        <div className="cta-content-wrapper flex flex-col items-center gap-3">
          <h1 className="leading-snug font-bold text-6xl max-lg:text-5xl max-md:text-3xl">
            A plan to fit your needs
          </h1>
          <p className="text-lg max-md:text-sm">
            Get secure, powerful AI Applications in minutes
          </p>
          <CTAList className="mt-6 max-md:flex max-md:flex-row max-md:w-fit max-md:mt-2">
            <Button withArrow variant="gloss" className="md:hidden">
              Start for free
            </Button>
            <Button
              withArrow
              size="lg"
              variant="gloss"
              className="max-md:hidden">
              Start for free
            </Button>
            <Button
              withArrow
              size="lg"
              variant="secondary"
              className="max-md:hidden">
              Get a Demo
            </Button>
          </CTAList>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
