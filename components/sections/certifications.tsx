import Image from 'next/image';

const CertificationData = ['gdpr', 'soc2', 'hipaa'];

export function CertificationsList() {
  return (
    <div className="flex flex-row items-center justify-start gap-6 mt-12">
      {CertificationData.map((certification: string, index: number) => {
        return (
          <Image
            key={index}
            alt={certification}
            src={`/media/certifications/${certification}.webp`}
            width={80}
            height={40}
            priority
            className="grayscale hover:grayscale-0 transition-all"
          />
        );
      })}
    </div>
  );
}
