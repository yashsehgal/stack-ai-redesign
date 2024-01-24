'use client';
import { cn } from '@/helpers';
import { forwardRef } from 'react';

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  description?: string;
}

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  ({ className, headline, description, ...args }, ref) => {
    return (
      <div className="bento-content-wrapper flex flex-col items-start gap-4">
        <div className="bento-card-details-wrapper">
          <h3
            className={cn(
              'feature-card-title text-xl font-medium max-lg:text-center max-lg:w-fit max-lg:mx-auto',
            )}>
            {headline}
          </h3>
          {description && (
            <p
              className={cn(
                'feature-card-description text-sm text-neutral-500 leading-6 max-lg:text-center max-lg:w-[28ch] max-lg:mx-auto mt-2',
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
