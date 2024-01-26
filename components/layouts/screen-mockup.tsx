import { cn } from '@/helpers';
import { forwardRef } from 'react';

export interface ScreenMockupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ScreenMockup = forwardRef<HTMLDivElement, ScreenMockupProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'screen-mockup-wrapper docs-demo-image-wrapper bg-gradient-to-bl from-neutral-100/80 via-neutral-50 to-white rounded-3xl border w-fit h-fit overflow-hidden p-4 max-lg:hidden shadow-xl shadow-neutral-100',
          className,
        )}
        {...args}
      />
    );
  },
);

ScreenMockup.displayName = 'ScreenMockup';
