import * as React from "react";

import { cn } from "@/shared/lib/utils";

type SwitchProps = Omit<React.ComponentProps<"input">, "type" | "role"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
};

function Switch({ className, label, description, ...props }: SwitchProps) {
  return (
    <label
      data-slot="switch-field"
      className={cn(
        "inline-flex max-w-sm items-center gap-3 rounded-2xl px-2 py-1.5",
        props.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      )}
    >
      <input
        type="checkbox"
        role="switch"
        data-slot="switch"
        className={cn("peer sr-only", className)}
        {...props}
      />
      <span
        aria-hidden
        className="relative h-8 w-14 shrink-0 rounded-full bg-muted-foreground/30 transition-colors after:absolute after:left-1 after:top-1 after:size-6 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-primary peer-checked:after:translate-x-6 peer-focus-visible:ring-4 peer-focus-visible:ring-primary/15 peer-disabled:cursor-not-allowed"
      />
      {label || description ? (
        <span className="grid gap-0.5">
          {label ? (
            <span className="text-sm font-medium text-foreground">{label}</span>
          ) : null}
          {description ? (
            <span className="text-sm leading-5 text-muted-foreground">
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
}

export { Switch };
