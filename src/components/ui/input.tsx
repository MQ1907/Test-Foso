import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-full border border-white/10 bg-black/10 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-300/60 outline-none backdrop-blur transition focus:border-amber-300/40 focus:ring-2 focus:ring-amber-300/20",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

