import { cn } from '@/helpers';
import { forwardRef } from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-12', className)} {...props}>
        {children}
      </section>
    );
  },
);

SectionContainer.displayName = "SectionContainer";

export { SectionContainer };

export type { SectionContainerProps };