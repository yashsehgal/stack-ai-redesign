import { cn } from '@/helpers';
import { ReactNode, forwardRef } from 'react';

export interface IconContentWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}

export interface IconContentWrapperHeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface IconContentWrapperDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const IconContentWrapper = forwardRef<
  HTMLDivElement,
  IconContentWrapperProps
>(({ className, icon, children, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'icon-content-wrapper flex flex-col items-start gap-4 max-lg:items-center',
        className,
      )}
      {...args}>
      <div className="icon-container p-2 rounded-full bg-neutral-100 flex flex-row items-center justify-center w-fit h-fit">
        {icon}
      </div>
      <div className={cn('icon-content-children-wrapper')}>{children}</div>
    </div>
  );
});

IconContentWrapper.displayName = 'IconContentWrapper';

export const IconContentWrapperHeadline = forwardRef<
  HTMLHeadingElement,
  IconContentWrapperHeadlineProps
>(({ className, ...args }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn(
        'icon-content-wrapper-headline',
        'text-lg font-medium max-lg:text-center max-lg:w-fit max-lg:mx-auto',
        className,
      )}
      {...args}
    />
  );
});

IconContentWrapperHeadline.displayName = 'IconContentWrapperHeadline';

export const IconContentWrapperDescription = forwardRef<
  HTMLParagraphElement,
  IconContentWrapperDescriptionProps
>(({ className, ...args }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'icon-content-wrapper-description',
        'text-sm text-neutral-500 leading-6 max-lg:text-center max-lg:w-[28ch] max-lg:mx-auto mt-2',
        className,
      )}
      {...args}
    />
  );
});

IconContentWrapperDescription.displayName = 'IconContentWrapperDescription';
