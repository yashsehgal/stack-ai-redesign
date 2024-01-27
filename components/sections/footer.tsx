'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import { StackAILogo } from '@/components/ui';
import { cn } from '@/helpers';
import { SocialLinkList, FooterLinks } from '@/common';
import { CertificationsList } from '@/components/sections/certifications';

export function FooterSection() {
  const renderLinks = (category: string, links: string[]) => (
    <div className={`${category.toLowerCase()}-links-wrapper grid gap-2`}>
      <p className="text-sm font-medium">{category}</p>
      <ul className={`${category.toLowerCase()}-links-list grid gap-1`}>
        {links.map((option: string, index: number) => (
          <Link
            href="#"
            key={index}
            className="text-sm text-neutral-400 font-normal hover:text-neutral-500">
            {option}
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <SectionContainer
      id="footer"
      className="border-t border-neutral-200 py-20 grid gap-24">
      <ViewContainer className="footer-top-layer-container flex flex-row items-start justify-between max-lg:flex-col">
        {/* Content for the left section of the footer */}
        <div className="company-cta-content-wrapper">
          <h2 className="leading-snug text-4xl font-semibold">
            The No-Code <br />
            Generative AI Platform
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Deploy custom AI Assistants, Chatbots & Workflow <br />
            Automations to make your company 10x more efficient.
          </p>
          <SocialLinks className="mt-4" />
          <CertificationsList />
        </div>

        {/* Content for the right section of the footer */}
        <div className="footer-links-grid-container flex flex-row items-start justify-end gap-16 max-md:grid max-md:grid-cols-2 max-lg:mt-12">
          {Object.entries(FooterLinks).map(
            ([category, links]: [string, string[]], index: number) => (
              <React.Fragment key={index}>
                {renderLinks(category, links)}
              </React.Fragment>
            ),
          )}
        </div>
      </ViewContainer>

      {/* Bottom section of the footer */}
      <ViewContainer className="footer-bottom-layer-container flex flex-row items-center justify-between border-t border-t-neutral-100 pt-8 select-none cursor-default">
        <div className="logo-wrapper">
          <StackAILogo />
        </div>
        <p className="select-none cursor-default text-xs font-medium text-neutral-400 grayscale hover:grayscale-0">
          {'Redesigned with ❤️ by Yash Sehgal'}
        </p>
      </ViewContainer>
    </SectionContainer>
  );
}

// Define the SocialLinks component
function SocialLinks({
  className,
  ...args
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-row items-center gap-4', className)}
      {...args}>
      {SocialLinkList.map((social, index) => (
        <Link
          href={social.link}
          key={index}
          className="grayscale hover:grayscale-0">
          <Image
            src={`/media/social/${social.icon}.svg`}
            alt={social.icon}
            width={24}
            height={24}
            className=""
          />
        </Link>
      ))}
    </div>
  );
}
