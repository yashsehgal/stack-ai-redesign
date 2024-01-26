'use client';
import React from 'react';
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  StackAILogo,
  navigationMenuTriggerStyle,
} from '@/components/ui';
import { ViewContainer } from '../layouts';
import { cn } from '@/helpers';

const solutionOptions = [
  {
    title: 'Company',
    href: '/solutions/company',
    description: 'Description for Company option.',
  },
  {
    title: 'Enterprise',
    href: '/solutions/enterprise',
    description: 'Description for Enterprise option.',
  },
  {
    title: 'SMB',
    href: '/solutions/smb',
    description: 'Description for SMB option.',
  },
  {
    title: 'Startups',
    href: '/solutions/startups',
    description: 'Description for Startups option.',
  },
  {
    title: 'AI Assistants',
    href: '/solutions/ai-assistants',
    description: 'Description for AI Assistants option.',
  },
  {
    title: 'Workflow Automation',
    href: '/solutions/workflow-automation',
    description: 'Description for Workflow Automation option.',
  },
  {
    title: 'Chatbots',
    href: '/solutions/chatbots',
    description: 'Description for Chatbots option.',
  },
  {
    title: 'Healthcare',
    href: '/solutions/healthcare',
    description: 'Description for Healthcare option.',
  },
  {
    title: 'Education',
    href: '/solutions/education',
    description: 'Description for Education option.',
  },
  {
    title: 'Manufacturing and Logistics',
    href: '/solutions/manufacturing-logistics',
    description: 'Description for Manufacturing and Logistics option.',
  },
];

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar-section py-6">
      <ViewContainer className="flex flex-row items-center justify-between">
        <div className="logo-wrapper">
          <StackAILogo />
        </div>
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {solutionOptions.map((option) => (
                    <ListItem
                      key={option.title}
                      title={option.title}
                      href={option.href}>
                      {option.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {['Pricing', 'Docs', 'Blog', 'Discord', 'Talk to us'].map(
              (option: string, index: number) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {option}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="navbar-cta-wrapper flex flex-row items-center justify-end gap-3">
          <Button variant="secondary">Login</Button>
          <Button>Get Started</Button>
        </div>
      </ViewContainer>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
