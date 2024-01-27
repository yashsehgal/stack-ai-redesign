import Image from 'next/image';
import { SectionContainer, ViewContainer } from '../layouts';

const InvestorCompanyLogos = ['yc.webp', 'soma.webp', 'gradient-ventures.svg'];

export default function InvestorSection() {
  return (
    <SectionContainer id="investors">
      <ViewContainer>
        <h2 className="font-semibold text-2xl text-center">
          Backed By Visionaries
        </h2>
        <div className="grid grid-cols-3 justify-center items-center mt-24 max-md:grid-cols-2">
          {InvestorCompanyLogos.map((logo: string, index: number) => {
            return (
              <Image
                key={index}
                src={`/media/investors/${logo}`}
                alt={logo}
                width={140}
                height={80}
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
