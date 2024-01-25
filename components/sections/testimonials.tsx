'use client';
import { SectionContainer, ViewContainer } from '../layouts';
import { CTAContainer, CTAHeadline } from '../ui';

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
    <SectionContainer id="testimonials">
      <ViewContainer className="grid grid-cols-1 gap-6">
        <div className="testimonials-top-layer flex flex-row items-center justify-around">
          <CTAContainer>
            <CTAHeadline>We are working with amazing companies</CTAHeadline>
          </CTAContainer>
          <TestimonialCard {...TestimonialList[0]} />
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}

function TestimonialCard(data: TestimonialCardProps) {
  return <div></div>;
}
