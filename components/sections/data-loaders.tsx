'use client';
import Image from 'next/image';
import { SectionContainer, ViewContainer } from '../layouts';
import { CTAContainer, CTADescription, CTAHeadline } from '../ui';

const DataLoadersList = [
  'aws',
  'onedrive',
  'google-cloud',
  's3',
  'airtable',
  'notion',
  'slack',
  'postgres',
  'snowflake',
];

export default function DataLoadersSection() {
  return (
    <SectionContainer id="data-loaders">
      <ViewContainer className="flex flex-row items-center justify-around max-lg:flex-col max-xl:items-start max-xl:gap-12">
        <CTAContainer>
          <CTAHeadline>Connect with your Data, wherever it sits...</CTAHeadline>
          <CTADescription>
            Seamlessly connect to your data using our suite of integrations with
            popular data storage solutions such as <b>AWS S3</b>,{' '}
            <b>Google Drive</b>,<b>OneDrive</b>, <b>Notion</b>, <b>Airtable</b>,
            and many more...
          </CTADescription>
          <CTADescription>
            Power your application with advanced indexing algorithms to extract
            the most relevant responses for your users.
          </CTADescription>
        </CTAContainer>
        <div className="data-loaders-logo-list-wrapper grid grid-cols-3 w-fit gap-16 items-center justify-center max-lg:w-fit max-lg:mx-auto max-lg:mt-6">
          {DataLoadersList.map((logo: string, index: number) => {
            return (
              <Image
                src={`/media/data-loaders/${logo}.svg`}
                alt={logo}
                key={index}
                width={logo === 'aws' ? 60 : 70}
                height={60}
              />
            );
          })}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
