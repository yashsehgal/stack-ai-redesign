'use client';
import { cn } from '@/helpers';
import { forwardRef } from 'react';

export interface CTAContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface CTAHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  sectionTheme?: 'light' | 'dark';
}
export interface CTADescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  sectionTheme?: 'light' | 'dark';
}
export interface CTAListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CTAContainer = forwardRef<HTMLDivElement, CTAContainerProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'cta-container flex flex-col items-start gap-4 max-md:grid max-md:items-center',
          className,
        )}
        {...args}
      />
    );
  },
);

CTAContainer.displayName = 'CTAContainer';

export const CTAHeadline = forwardRef<HTMLHeadingElement, CTAHeadlineProps>(
  ({ className, sectionTheme = 'light', ...args }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'cta-headline leading-snug text-3xl font-semibold w-[20ch] max-lg:text-center max-lg:w-full',
          sectionTheme === 'dark' && 'text-white',
          className,
        )}
        {...args}
      />
    );
  },
);

CTAHeadline.displayName = 'CTAHeadline';

export const CTADescription = forwardRef<
  HTMLParagraphElement,
  CTADescriptionProps
>(({ className, sectionTheme = 'light', ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'cta-description leading-7 text-base text-neutral-500 w-[36ch] max-lg:text-center max-lg:w-full max-lg:text-base',
        sectionTheme === 'dark' && 'text-neutral-400',
        className,
      )}
      {...args}
    />
  );
});

CTADescription.displayName = 'CTADescription';

export const CTAList = forwardRef<HTMLDivElement, CTAListProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'cta-list-wrapper flex flex-row items-center gap-3 justify-start mt-4 max-lg:justify-center max-lg:w-full max-md:grid max-md:justify-normal',
          className,
        )}
        {...args}
      />
    );
  },
);

CTAList.displayName = 'CTAList';
