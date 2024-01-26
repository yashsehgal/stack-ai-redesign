'use client';
import { cn } from '@/helpers';
import { forwardRef } from 'react';

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  description?: string;
  stretch?: boolean;
}

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  ({ className, headline, description, stretch = false, ...args }, ref) => {
    return (
      <div
        className={cn(
          'bento-content-wrapper flex flex-col items-center gap-4 max-lg:items-center',
          stretch && 'w-full',
        )}>
        <div className="bento-card-details-wrapper">
          <h3
            className={cn(
              'feature-card-title text-xl font-medium text-center max-lg:w-fit max-lg:mx-auto',
            )}>
            {headline}
          </h3>
          {description && (
            <p
              className={cn(
                'feature-card-description text-sm text-neutral-500 leading-6 text-center max-lg:mx-auto mt-2',
              )}>
              {description}
            </p>
          )}
        </div>
        <div
          ref={ref}
          className={cn(
            'bento-card p-4 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-inner overflow-hidden',
            className,
          )}
          {...args}
        />
      </div>
    );
  },
);

BentoCard.displayName = 'BentoCard';
