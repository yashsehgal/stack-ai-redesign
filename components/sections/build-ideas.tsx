'use client';
import { ReactNode, useState } from 'react';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import { BuildIdeaContentData } from '@/common';
import { motion } from 'framer-motion';
import {
  IconContentWrapper,
  IconContentWrapperDescription,
  IconContentWrapperHeadline,
} from '@/components/ui';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/helpers';

export function BuildIdeaSection() {
  return (
    <>
      <SectionContainer id="build-ideas" className="pb-8">
        <ViewContainer>
          <h2 className="leading-snug font-semibold text-4xl text-neutral-400 max-lg:text-3xl max-lg:text-center max-md:text-2xl">
            <span className="text-black">Unlock unparalleled potential</span> by
            leveraging cutting-edge technology to efficiently{' '}
            <span className="text-black">
              Build & Deploy Custom AI Applications
            </span>
            , revolutionizing the way you engage with advanced artificial
            intelligence solutions.
          </h2>
        </ViewContainer>
      </SectionContainer>
      <SectionContainer className="py-0">
        <ViewContainer className="ideas-content-container grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          <AssistantProjectIdeas />
          <AutomationProjectIdeas />
          <ChatbotProjectIdeas />
        </ViewContainer>
      </SectionContainer>
    </>
  );
}

export interface BuildIdeaContentBlockType {
  icon: ReactNode;
  demoURL: string;
  headline: string;
  description: string;
  animationMagnitude?: number;
  hasBorder?: boolean;
}

function IdeaBlock(data: BuildIdeaContentBlockType) {
  const [hoveringOnLink, setHoveringOnLink] = useState<boolean>(false);
  return (
    <motion.div
      className={cn(
        'p-12 max-md:p-6',
        data.animationMagnitude &&
          data.animationMagnitude % 2 === 0 &&
          'border-x max-lg:border-x-0',
        data.hasBorder && 'border-y max-lg:border-y-0',
      )}
      initial={{
        opacity: 0,
        y: 24 * ((data.animationMagnitude || 1) + 1),
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: 'spring',
        bounce: 0.5,
      }}>
      <IconContentWrapper icon={data.icon}>
        <IconContentWrapperHeadline>{data.headline}</IconContentWrapperHeadline>
        <IconContentWrapperDescription>
          {data.description}
        </IconContentWrapperDescription>
        <Link
          href={data.demoURL}
          target="_blank"
          className="font-medium hover:text-blue-500  transition-all mt-6 flex flex-row items-center justify-start gap-1 hover:gap-2 max-lg:mx-auto max-lg:w-fit"
          onMouseEnter={() => setHoveringOnLink(true)}
          onMouseLeave={() => setHoveringOnLink(false)}>
          Learn more
          {!hoveringOnLink ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </Link>
      </IconContentWrapper>
    </motion.div>
  );
}

function AssistantProjectIdeas() {
  return (
    <>
      {BuildIdeaContentData.Assitants.map((block, index) => {
        const data = { ...block, animationMagnitude: index + 1 };
        return <IdeaBlock key={index} {...data} />;
      })}
    </>
  );
}

function AutomationProjectIdeas() {
  return (
    <>
      {BuildIdeaContentData.Automations.map((block, index) => {
        const data = { ...block, animationMagnitude: index + 1 };
        return <IdeaBlock key={index} {...data} hasBorder />;
      })}
    </>
  );
}

function ChatbotProjectIdeas() {
  return (
    <>
      {BuildIdeaContentData.Chatbots.map((block, index) => {
        const data = { ...block, animationMagnitude: index + 1 };
        return <IdeaBlock key={index} {...data} />;
      })}
    </>
  );
}
