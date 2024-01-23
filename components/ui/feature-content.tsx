import { forwardRef } from 'react';
import { FeatureIcon, FeatureIconType } from '.';
import { cn } from '@/helpers';

export interface FeatureContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: FeatureIconType;
  title: string;
  description?: string;
  direction?: 'horizontal' | 'vertical';
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureContentProps>(
  (
    { className, title, description, direction = 'vertical', icon, ...args },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'feature-card w-[340px]',
          direction === "horizontal" && "flex flex-row items-center gap-4",
          direction === "vertical" && "flex flex-col items-start gap-2 max-lg:items-center",
          className,
        )}
        {...args}>
        <FeatureIcon icon={icon} />
        <h3
          className={cn(
            'feature-card-title text-xl font-medium max-lg:text-center',
            direction === 'vertical' && 'mt-4',
          )}>
          {title}
        </h3>
        {description && (
          <p className={cn('feature-card-description text-sm text-neutral-500 leading-6 max-lg:text-center')}>{description}</p>
        )}
      </div>
    );
  },
);

FeatureCard.displayName = 'FeatureCard';
