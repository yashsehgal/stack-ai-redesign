'use client';
import { cn } from '@/helpers';
import Image from 'next/image';
import { forwardRef } from 'react';

export type FeatureIconType =
  | 'no-code'
  | 'data-retention'
  | 'encryption'
  | 'export'
  | 'infra'
  | 'prebuilt'
  | 'security'
  | 'sso'
  | 'stats'
  | 'support'
  | 'threat';

export interface FeatureIconProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  icon: FeatureIconType;
}

export const FeatureIcon = forwardRef<HTMLImageElement, FeatureIconProps>(
  ({ className, icon = 'no-code', ...args }, ref) => {
    return (
      <Image
        ref={ref}
        src={`/media/icons/${icon}.svg`}
        className={cn('shadow-md rounded-2xl', className)}
        width={80 as any}
        height={80 as any}
        alt={icon}
        {...args}
      />
    );
  },
);

FeatureIcon.displayName = 'FeatureIcon';
