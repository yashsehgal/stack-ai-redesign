'use client';
import Link from 'next/link';
import { SectionContainer, ViewContainer } from '../layouts';

const FooterLinks = {
  SolutionLinks: ['AI Assistants', 'Workflow automation', 'Chatbots'],
  SupportLinks: ['Pricing', 'Documentation', 'Tutorials', 'Status Page'],
  CompanyLinks: [
    'About',
    'Blog',
    'Careers',
    'Stack AI Affiliate',
    'Stack AI Certified',
  ],
  LegalLinks: [
    'Privacy',
    'Terms',
    'OpenAI DPA',
    'Anthropic DPA',
    'SOC 2 Report',
    'Sign BAA with us',
  ],
};

export default function FooterSection() {
  return (
    <SectionContainer id="footer" className="shadow-inner py-20">
      <ViewContainer className="footer-top-layer-container flex flex-row items-start justify-between max-lg:flex-col">
        <div className="company-cta-content-wrapper">
          <h2 className="leading-snug text-4xl font-semibold">
            The No-Code <br />
            Generative AI Platform
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Deploy custom AI Assistants, Chatbots & Workflow <br />
            Automations to make your company 10x more efficient.
          </p>
        </div>
        <div className="footer-links-grid-container flex flex-row items-start justify-end gap-16 max-md:grid max-md:grid-cols-2 max-lg:mt-12">
          <div className="solution-links-wrapper grid gap-2">
            <p className="text-sm font-medium">Solutions</p>
            <ul className="solution-links-list grid gap-1">
              {FooterLinks.SolutionLinks.map(
                (option: string, index: number) => {
                  return (
                    <Link
                      href="#"
                      key={index}
                      className="text-sm text-neutral-400 font-normal hover:text-neutral-500">
                      {option}
                    </Link>
                  );
                },
              )}
            </ul>
          </div>
          <div className="support-links-wrapper grid gap-2">
            <p className="text-sm font-medium">Support</p>
            <ul className="support-links-list grid gap-1">
              {FooterLinks.SupportLinks.map((option: string, index: number) => {
                return (
                  <Link
                    href="#"
                    key={index}
                    className="text-sm text-neutral-400 font-normal hover:text-neutral-500">
                    {option}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="company-links-wrapper grid gap-2">
            <p className="text-sm font-medium">Company</p>
            <ul className="company-links-list grid gap-1">
              {FooterLinks.CompanyLinks.map((option: string, index: number) => {
                return (
                  <Link
                    href="#"
                    key={index}
                    className="text-sm text-neutral-400 font-normal hover:text-neutral-500">
                    {option}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="legal-links-wrapper grid gap-2">
            <p className="text-sm font-medium">Legal</p>
            <ul className="legal-links-list grid gap-1">
              {FooterLinks.LegalLinks.map((option: string, index: number) => {
                return (
                  <Link
                    href="#"
                    key={index}
                    className="text-sm text-neutral-400 font-normal hover:text-neutral-500">
                    {option}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </ViewContainer>
      <ViewContainer className="footer-bottom-layer-container"></ViewContainer>
    </SectionContainer>
  );
}
