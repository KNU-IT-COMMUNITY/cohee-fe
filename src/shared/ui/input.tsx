import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-14 w-full rounded-2xl border border-input bg-card px-4 text-[15px] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground/60 focus-visible:border-primary/35 focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:bg-muted/50 disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/10",
        className
      )}
      {...props}
    />
  );
}

export { Input };
