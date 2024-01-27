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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SidebarMenu,
  SidebarMenuContainer,
  SidebarMenuContent,
  SidebarMenuItem,
} from '@/components/ui';
import { ViewContainer } from '@/components/layouts';
import { cn } from '@/helpers';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const SolutionOptions = [
  {
    title: 'Enterprise',
    href: 'https://www.stack-ai.com/solutions/enterprise',
    description: 'Enhance enterprise productivity with cutting-edge solutions.',
  },
  {
    title: 'SMB',
    href: 'https://www.stack-ai.com/solutions/smb',
    description:
      'Optimize operations with tailored solutions for small and medium-sized businesses.',
  },
  {
    title: 'Startups',
    href: 'https://www.stack-ai.com/solutions/startups',
    description:
      'Fuel startup growth with specialized solutions for unique challenges.',
  },
  {
    title: 'AI Assistants',
    href: 'https://www.stack-ai.com/solutions/assistants',
    description:
      'Experience the power of AI assistants for streamlined tasks and improved efficiency.',
  },
  {
    title: 'Workflow Automation',
    href: 'https://www.stack-ai.com/solutions/workflow-automation',
    description:
      'Optimize workflows with automation solutions for simplicity and speed.',
  },
  {
    title: 'Chatbots',
    href: 'https://www.stack-ai.com/solutions/chatbots',
    description:
      'Engage users seamlessly with intelligent chatbots for enhanced experiences.',
  },
  {
    title: 'Healthcare',
    href: 'https://www.stack-ai.com/solutions/healthcare',
    description:
      'Revolutionize healthcare delivery with solutions improving patient care.',
  },
  {
    title: 'Education',
    href: 'https://www.stack-ai.com/solutions/education',
    description:
      'Transform education through innovative solutions for interactive learning.',
  },
  {
    title: 'Manufacturing and Logistics',
    href: 'https://www.stack-ai.com/solutions/manufacturing',
    description:
      'Optimize manufacturing and logistics with solutions for efficiency.',
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
                  {SolutionOptions.map((option) => (
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
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="p-2">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="options w-full h-full flex flex-col justify-between py-12">
                <div className="options-wrapper">
                  <SidebarMenuContainer>
                    <SidebarMenu trigger="Solutions">
                      <SidebarMenuContent>
                        {SolutionOptions.map((option) => (
                          <SidebarMenuItem key={option.title}>
                            <Link href={option.href} target="_blank">
                              {option.title}
                            </Link>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenuContent>
                    </SidebarMenu>
                    <SidebarMenuContent>
                      {['Pricing', 'Docs', 'Blog', 'Discord', 'Talk to us'].map(
                        (option, index) => (
                          <SidebarMenuItem key={index}>
                            {option}
                          </SidebarMenuItem>
                        ),
                      )}
                    </SidebarMenuContent>
                  </SidebarMenuContainer>
                </div>
                <div className="navbar-cta-wrapper grid gap-3">
                  <Button variant="secondary">Login</Button>
                  <Button variant="gloss">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="navbar-cta-wrapper flex flex-row items-center justify-end gap-3 max-lg:hidden">
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-neutral-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
