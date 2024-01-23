'use client';
import { cn } from '@/helpers';
import { forwardRef } from 'react';

export interface CTAContainerProps
  extends React.HTMLAttributes<HTMLDivElement> { }
export interface CTAHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> { }
export interface CTADescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> { }
export interface CTAListProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CTAContainer = forwardRef<HTMLDivElement, CTAContainerProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'cta-container flex flex-col items-start gap-4',
          className,
        )}
        {...args}
      />
    );
  },
);

CTAContainer.displayName = 'CTAContainer';

export const CTAHeadline = forwardRef<HTMLHeadingElement, CTAHeadlineProps>(
  ({ className, ...args }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'cta-headline leading-snug text-3xl font-semibold w-[20ch]',
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
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'cta-description leading-7 text-base text-neutral-500 w-[36ch]',
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
          'cta-list-wrapper flex flex-row items-center gap-3 justify-start mt-4',
          className,
        )}
        {...args}
      />
    );
  },
);

CTAList.displayName = 'CTAList';
