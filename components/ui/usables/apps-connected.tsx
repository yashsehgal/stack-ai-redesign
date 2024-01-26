'use client';
import { cn } from '@/helpers';
import { BentoCard } from '..';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const ConnectedAppsListLayerOne = [
  '/data-loaders/zapier.svg',
  '/data-loaders/whatsapp.svg',
  '/data-loaders/notion.svg',
  '/data-loaders/aws.svg',
];

const ConnectedAppsListLayerTwo = [
  '/data-loaders/slack.svg',
  '/data-loaders/airtable.svg',
  '/data-loaders/zapier.svg',
  '/data-loaders/s3.svg',
];

const ConnectedAppsListLayerThree = [
  '/data-loaders/postgres.svg',
  '/data-loaders/onedrive.svg',
  '/data-loaders/google-cloud.svg',
  '/data-loaders/snowflake.svg',
];

export default function AppsConnectedUsableExample() {
  return (
    <div className="flex flex-col justify-between h-full w-[380px] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <Marquee className="p-2 flex flex-row items-center overflow-hidden">
        <div className="connected-apps-layer-one flex flex-row items-stretch justify-between gap-4">
          {ConnectedAppsListLayerOne.map((app: string, index: number) => {
            return <AppCard logo={app} key={index} />;
          })}
        </div>
      </Marquee>
      <Marquee
        className="p-2 flex flex-row items-center overflow-hidden"
        direction={'right'}>
        <div className="connected-apps-layer-two flex flex-row items-stretch justify-between gap-4">
          {ConnectedAppsListLayerTwo.map((app: string, index: number) => {
            return <AppCard logo={app} key={index} />;
          })}
        </div>
      </Marquee>
      <Marquee className="p-2 flex flex-row items-center overflow-hidden">
        <div className="connected-apps-layer-three flex flex-row items-stretch justify-between gap-4">
          {ConnectedAppsListLayerThree.map((app: string, index: number) => {
            return <AppCard logo={app} key={index} />;
          })}
        </div>
      </Marquee>
      <Marquee
        className="p-2 flex flex-row items-center overflow-hidden"
        direction="right">
        <div className="connected-apps-layer-four flex flex-row items-stretch justify-between gap-4">
          {ConnectedAppsListLayerOne.map((app: string, index: number) => {
            return <AppCard logo={app} key={index} />;
          })}
        </div>
      </Marquee>
    </div>
  );
}

function AppCard({ logo }: { logo: string }) {
  return (
    <motion.div
      className="p-4 w-fit border border-neutral-100 rounded-xl bg-white shadow-neutral-200 flex flex-row items-center justify-center cursor-pointer shadow"
      whileHover={{
        scale: 0.8,
      }}>
      <Image
        src={`/media/${logo}`}
        alt="app-logo"
        className="select-none"
        width={40}
        height={40}
      />
    </motion.div>
  );
}
