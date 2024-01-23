"use client";
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  StackAILogo,
  navigationMenuTriggerStyle,
} from "@/components/ui"
import { ViewContainer } from "../layouts";

export const Navbar: React.FunctionComponent = () => {
  return <nav className="navbar-section py-6">
    <ViewContainer className="flex flex-row items-center justify-between">
      <div className="logo-wrapper">
        <StackAILogo />
      </div>
      <NavigationMenu className="max-lg:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
            <NavigationMenuContent />
          </NavigationMenuItem>
          {["Pricing", "Docs", "Blog"].map((option: string, index: number) => {
            return <NavigationMenuItem key={index}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {option}
              </NavigationMenuLink>
            </NavigationMenuItem>
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="navbar-cta-wrapper flex flex-row items-center justify-end gap-3">
        <Button variant="secondary">Login</Button>
        <Button>Get Started</Button>
      </div>
    </ViewContainer>
  </nav>
}