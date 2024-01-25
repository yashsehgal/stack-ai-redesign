'use client';
import { cn } from '@/helpers';
import { SectionContainer, ViewContainer } from '../layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
} from '../ui';
import Image from 'next/image';

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fullName: string;
  avatar: string;
  companyLogo: string;
  designation: string;
  content: string;
}

const TestimonialList: TestimonialCardProps[] = [
  {
    content:
      'Stack AI has been an invaluable resource in piloting and collaborating around complex LLM projects. The support from the leadership team has also helped accelerate development.',
    designation: 'CEO',
    fullName: 'Michael Carvin',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fmichaelcarvin.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2Fsmartasset.png&w=384&q=75',
  },
  {
    content:
      'Since we began using Stack AI, the productivity gains have been remarkable. The ability to effortlessly create complex logic has been a game-changer for us.',
    designation: 'CEO',
    fullName: 'Yarden Shaked',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fyardenshaked.jpeg&w=384&q=75',
    companyLogo: 'https://www.stack-ai.com/varos.svg',
  },
  {
    content:
      'The team is deeply invested in our success, demonstrating a genuine commitment to ensuring a favorable outcome for our projects.',
    designation: 'CEO',
    fullName: 'Bruce Rasa',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fbrucerasa.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2Fdexer.webp&w=384&q=75',
  },
  {
    content:
      'Using Stack AI has transformed how we approach AI. Their easy-to-use tools and dedicated team have truly helped us meet our goals. We appreciate not just their tech, but also the personal touch they bring.',
    designation: 'CTO',
    fullName: 'Din Grinshtein',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fdingrinshtein.png&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2FEmpire%20Media%20Square%20Logo.png&w=384&q=75',
  },
  {
    content:
      "Stack AI's support was instrumental in launching our first AI use cases in the platform, marking a significant milestone in our journey towards embracing Generative AI.",
    designation: 'CEO',
    fullName: 'Vicente Zavarce',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fvicentezavarce.avif&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2Fyummy.png&w=384&q=75',
  },
  {
    content:
      "Stack AI freed our team from tedious programming, letting us focus on true AI innovation. Their intuitive design has empowered us to achieve more in less time. It's been a game-changer for us.",
    designation: 'AI Engineer',
    fullName: 'Tsoof Bar Or',
    avatar: 'https://www.stack-ai.com/_next/image?url=%2Ftsoof.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2FEmpire%20Media%20Square%20Logo.png&w=384&q=75',
  },
  {
    content:
      'Using StackAI has been a game-changer. Simple to use, effective results. Our team at Truewind is genuinely impressed. Highly recommended.',
    designation: 'CTO',
    fullName: 'Tennison Chan',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Ftennison.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2Ftruewind.png&w=384&q=75',
  },
];

export default function TestimonialSection() {
  return (
    <SectionContainer id="testimonials" className="relative">
      <ViewContainer className="flex flex-row items-start gap-12 max-lg:grid max-lg:items-center">
        <div className="testimonials-top-layer grid gap-44 items-start justify-around max-lg:flex-col max-xl:items-start max-xl:gap-30 lg:sticky lg:top-36 max-lg:w-fit max-lg:mx-auto">
          <CTAContainer className="">
            <CTAHeadline>We are working with amazing companies</CTAHeadline>
            <CTADescription>
              Discover the success stories of our collaborative journey with
              outstanding companies. Hear firsthand experiences from our valued
              partners who have benefited from the exceptional services and
              solutions we provide.
            </CTADescription>
            <CTAList>
              <Button variant="gloss" withArrow size="lg">
                {'Start Exploring'}
              </Button>
            </CTAList>
          </CTAContainer>
          <TestimonialCard {...TestimonialList[0]} className="max-lg:hidden" />
        </div>
        <div className="grid testimonials-bottom-layer-grid-wrapper gap-x-12 gap-y-16 max-lg:w-fit max-lg:mx-auto max-lg:mt-12">
          <TestimonialCard {...TestimonialList[0]} className="lg:hidden" />
          {TestimonialList.map(
            (testimonial: TestimonialCardProps, index: number) => {
              if (index) {
                return <TestimonialCard {...testimonial} key={index} />;
              }
            },
          )}
        </div>
        <CTAList className="lg:hidden">
          <Button size="lg" withArrow>
            Get a Demo
          </Button>
        </CTAList>
      </ViewContainer>
    </SectionContainer>
  );
}

function TestimonialCard({
  className,
  content,
  avatar,
  fullName,
  designation,
  companyLogo,
  ...args
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'testimonial-card relative border rounded-3xl py-6 px-10 max-w-[600px]',
        className,
      )}
      {...args}>
      <div className="testimonial-author-details-container flex flex-row items-center justify-between absolute -top-8">
        <div className="author-details-wrapper p-2 bg-white flex flex-row items-center gap-2">
          <Image
            src={avatar}
            alt={fullName}
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
          <div className="author-name-designation-wrapper flex flex-col items-start gap-1">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs font-medium text-neutral-500">
              {designation}
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-content-wrapper w-full h-full flex flex-col items-start gap-6 justify-center mt-2">
        <p className="text font-medium">{`\"${content}\"`}</p>
        <div className='author-companyLogo-wrapper w-full flex flex-row items-center justify-end'>
          <Image
            src={companyLogo}
            alt="company-logo"
            width={(fullName === "Michael Carvin" || fullName === "Tennison Chan") ? 100 : 60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
