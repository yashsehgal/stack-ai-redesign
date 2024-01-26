import { cn } from '@/helpers';
import { ChevronRight } from 'lucide-react';
import React, { ReactElement, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface SidebarMenuContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface MenuProps {
  trigger: string;
  icon?: ReactElement;
}
export interface SidebarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MenuProps {}
export interface SidebarMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
export interface SidebarMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface SidebarSubMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MenuProps {}
export interface SidebarSubMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
export interface SidebarSubMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export interface SidebarSubMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SidebarMenuContainer = forwardRef<
  HTMLDivElement,
  SidebarMenuContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('sidebar-menu-container grid gap-1', className)}
      {...props}>
      {children}
    </div>
  );
});

SidebarMenuContainer.displayName = 'SidebarMenuContainer';

export const SidebarMenu = forwardRef<HTMLDivElement, SidebarMenuProps>(
  ({ className, children, trigger, icon = null, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div ref={ref} className={cn('sidebar-menu', className)} {...props}>
        <SidebarMenuTrigger onClick={() => setOpen(!open)} isOpen={open}>
          {icon}
          {trigger}
        </SidebarMenuTrigger>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}>
            {children}
          </motion.div>
        )}
      </div>
    );
  },
);

SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuTrigger = forwardRef<
  HTMLButtonElement,
  SidebarMenuTriggerProps
>(({ className, children, isOpen = false, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'sidebar-menu-trigger px-3 py-1.5 flex flex-row justify-between items-center hover:bg-neutral-100 rounded-xl w-full',
        className,
      )}
      {...props}>
      <div className="flex flex-row items-center justify-start gap-2">
        {children}
      </div>
      <ChevronRight className={cn('h-4 w-4', isOpen && 'rotate-90')} />
    </button>
  );
});

SidebarMenuTrigger.displayName = 'SidebarMenuTrigger';

export const SidebarMenuContent = forwardRef<
  HTMLDivElement,
  SidebarMenuContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'sidebar-menu-content grid grid-cols-1 pl-6 py-3 gap-3',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
});

SidebarMenuContent.displayName = 'SidebarMenuContent';

export const SidebarMenuItem = forwardRef<
  HTMLButtonElement,
  SidebarMenuItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'sidebar-menu-item text-left cursor-pointer hover:opacity-60',
        className,
      )}
      {...props}>
      {children}
    </button>
  );
});

SidebarMenuItem.displayName = 'SidebarMenuItem';

export const SidebarSubMenu = forwardRef<HTMLDivElement, SidebarSubMenuProps>(
  ({ className, children, trigger, icon = null, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div ref={ref} className={cn('sidebar-sub-menu', className)} {...props}>
        <SidebarSubMenuTrigger onClick={() => setOpen(!open)} isOpen={open}>
          {icon}
          {trigger}
        </SidebarSubMenuTrigger>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}>
            {children}
          </motion.div>
        )}
      </div>
    );
  },
);

SidebarSubMenu.displayName = 'SidebarSubMenu';

const SidebarSubMenuTrigger = forwardRef<
  HTMLButtonElement,
  SidebarSubMenuTriggerProps
>(({ className, children, isOpen = false, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'sidebar-sub-menu-trigger px-4 py-1.5 flex flex-row justify-between items-center hover:bg-neutral-100 rounded-xl w-full',
        className,
      )}
      {...props}>
      <div className="flex flex-row items-center justify-start gap-2">
        {children}
      </div>
      <ChevronRight className={cn('h-4 w-4', isOpen && 'rotate-90')} />
    </button>
  );
});

SidebarSubMenuTrigger.displayName = 'SidebarSubMenuTrigger';

export const SidebarSubMenuContent = forwardRef<
  HTMLDivElement,
  SidebarSubMenuContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'sidebar-sub-menu-content grid grid-cols-1 pl-6 py-3 gap-3',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
});

SidebarSubMenuContent.displayName = 'SidebarSubMenuContent';

export const SidebarSubMenuItem = forwardRef<
  HTMLButtonElement,
  SidebarSubMenuItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'sidebar-sub-menu-item text-left cursor-pointer hover:opacity-60',
        className,
      )}
      {...props}>
      {children}
    </button>
  );
});

SidebarSubMenuItem.displayName = 'SidebarSubMenuItem';
