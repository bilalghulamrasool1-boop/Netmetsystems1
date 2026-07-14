import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-1 shadow-lg hover:shadow-xl",
          {
            'bg-accent text-white hover:bg-gray-800': variant === 'primary',
            'bg-primary text-white hover:opacity-90': variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-white': variant === 'outline',
            'hover:bg-gray-100 text-gray-900 shadow-none hover:shadow-none': variant === 'ghost',
            'h-10 px-6 text-sm': size === 'sm',
            'h-12 px-8 text-base': size === 'md',
            'h-16 px-12 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
