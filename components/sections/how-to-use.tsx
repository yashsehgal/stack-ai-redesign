'use client';
import { cn } from '@/helpers';
import { SectionContainer, ViewContainer } from '../layouts';
import {
  CTAContainer,
  CTADescription,
  CTAHeadline,
  FeatureCard,
  FeatureContentProps,
  FeatureIcon,
} from '../ui';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export type StepType = 'build' | 'export' | 'logs' | 'manage';

const StepVideo = {
  build: 'build-tab.webm',
  export: 'export-tab.webm',
  logs: 'logs-tab.webm',
  manage: 'manager-tab.webm',
};

const HowToUseStepsList: Array<FeatureContentProps & { option: StepType }> = [
  {
    option: 'build',
    icon: 'no-code',
    title: 'Built',
    description:
      'Streamline your vision and construct with limitless possibilities.',
  },
  {
    option: 'export',
    icon: 'export',
    title: 'Export',
    description:
      'Streamline your vision and construct with limitless possibilities.',
  },
  {
    option: 'logs',
    icon: 'stats',
    title: 'Stats & Logs',
    description:
      "Dive into comprehensive logs for a clear view of your project's journey.",
  },
  {
    option: 'manage',
    icon: 'support',
    title: 'Manage',
    description:
      'Take control and manage your projects seamlessly, with ease and precision.',
  },
];

export default function HowToUseSection() {
  const [step, setStep] = useState<StepType>('build');
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.document.body.clientWidth);
    };
    // Initial update for screen-width
    updateScreenWidth();
    // Event listener for window resize
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionContainer id="how-to-use" className="bg-black">
      <ViewContainer className="max-lg:grid">
        <CTAContainer>
          <CTAHeadline sectionTheme="dark">
            Building & Managing can be done with no engineers
          </CTAHeadline>
          <CTADescription sectionTheme="dark">
            Navigate the realm of building and managing without the need for
            engineers. Achieve seamless control and execution, effortlessly,
            with our user-friendly tools and interfaces.
          </CTADescription>
        </CTAContainer>
        <div className="how-to-use-steps-content-container mt-12 flex flex-row items-center justify-between max-xl:flex-col-reverse max-xl:gap-12 gap-6">
          <div className="how-to-use-steps-list-wrapper flex flex-col gap-4 items-start max-xl:grid max-xl:grid-cols-2 max-xl:gap-12 max-lg:hidden max-lg:mt-12 max-lg:w-fit max-lg:mx-auto">
            {HowToUseStepsList.map(
              (
                stepItem: FeatureContentProps & { option: StepType },
                index: number,
              ) => {
                return (
                  <motion.div
                    className={cn(
                      'step-button p-4 rounded-3xl cursor-pointer pr-24 select-none max-lg:w-fit max-lg:pr-4',
                      step === stepItem.option && 'bg-neutral-900',
                      step !== stepItem.option && 'hover:bg-neutral-950',
                    )}
                    onClick={() => {
                      setStep(stepItem.option);
                    }}
                    whileHover={{
                      x: screenWidth > 1030 ? 6 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0.65,
                    }}
                    key={index}>
                    <FeatureCard
                      {...stepItem}
                      direction="horizontal"
                      sectionTheme="dark"
                    />
                  </motion.div>
                );
              },
            )}
          </div>
          <div className="how-to-use-steps-list-wrapper flex-row items-center justify-center gap-4 hidden max-lg:flex w-full">
            {HowToUseStepsList.map(
              (
                stepItem: FeatureContentProps & { option: StepType },
                index: number,
              ) => {
                return (
                  <button
                    key={index}
                    className={cn(
                      'flex flex-col items-center gap-3 cursor-pointer select-none hover:brightness-100',
                    )}
                    onClick={() => setStep(stepItem.option)}>
                    <FeatureIcon
                      icon={stepItem.icon}
                      className="w-16 h-16 hover:scale-95 transition-all active:scale-90"
                    />
                    <p
                      className={cn(
                        'text-white',
                        step === stepItem.option && 'text-blue-500',
                      )}>
                      {stepItem.title}
                    </p>
                  </button>
                );
              },
            )}
          </div>
          <div className="step-content-video-wrapper w-fit bg-gradient-to-b from-neutral-100 to-white flex flex-row items-center justify-center p-8 rounded-xl h-auto shadow-inner">
            {step === 'build' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className='shadow-xl rounded-lg'
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source
                  src={`/media/videos/build-tab.webm`}
                  type="video/webm"
                />
              </video>
            )}
            {step === 'export' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className='shadow-xl rounded-lg'
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source
                  src={`/media/videos/export-tab.webm`}
                  type="video/webm"
                />
              </video>
            )}
            {step === 'logs' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className='shadow-xl rounded-lg'
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source src={`/media/videos/logs-tab.webm`} type="video/webm" />
              </video>
            )}
            {step === 'manage' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className='shadow-xl rounded-lg'
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source
                  src={`/media/videos/manager-tab.webm`}
                  type="video/webm"
                />
              </video>
            )}
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
