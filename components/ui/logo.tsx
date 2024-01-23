import { cn } from "@/helpers";
import Image from "next/image";
import { forwardRef } from "react";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

export const StackAILogo = forwardRef<HTMLImageElement, LogoProps>(
  ({ className, ...args }, ref) => {
    return <Image
      ref={ref}
      src={"/media/logo.svg"}
      className={cn("", className)}
      priority
      alt="logo"
      width={100 as unknown as any}
      height={24 as unknown as any}
      {...args}
    />
  }
)

StackAILogo.displayName = "StackAILogo";