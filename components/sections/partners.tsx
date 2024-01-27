import Image from 'next/image';
import { SectionContainer, ViewContainer } from '@/components/layouts';

const PartnerCompanyLogos = [
  'actuate',
  'frontier',
  'hatch',
  'smartasset',
  'splunk',
  'truewind',
  'yummy',
  'zumma',
];

export function PartnerSection() {
  return (
    <SectionContainer>
      <ViewContainer>
        <h2 className="font-semibold text-2xl text-center">
          Empowering top-tier product teams, ranging from cutting-edge{' '}
          <br className="max-lg:hidden" />
          startups to well-established enterprises.
        </h2>
        <div className="grid grid-cols-4 gap-12 mt-24 max-md:grid-cols-2">
          {PartnerCompanyLogos.map((logo: string, index: number) => {
            return (
              <Image
                key={index}
                src={`/media/partners/${logo}.webp`}
                alt={logo}
                width={120}
                height={60}
                priority
                className="w-fit mx-auto grayscale hover:grayscale-0"
              />
            );
          })}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
