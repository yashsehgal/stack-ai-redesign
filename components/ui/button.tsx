import { cn } from "@/helpers";
import { ChevronRight } from "lucide-react";
import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, withArrow = false, variant = "primary", size = "md", ...args }, ref) => {
    return <button ref={ref}
      className={
        cn("flex flex-row items-center justify-center gap-1.5 hover:gap-2 transition-all",
          // variant styles
          variant === "primary" && "bg-gradient-to-b from-neutral-600 to-neutral-900 text-white shadow-md hover:brightness-125",
          variant === "secondary" && "bg-white hover:bg-neutral-50 text-black border",
          // size styles
          size === "md" && "px-4 py-2 rounded-lg font-medium text-base",
          size === "lg" && "px-6 py-3 font-medium rounded-xl text-lg",
          className)}
      {...args}
    >
      {children}
      {withArrow && <ChevronRight className="w-4 h-4" />}
    </button>
  }
);

Button.displayName = "Button";