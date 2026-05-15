import * as React from "react";

import { cn } from "@/shared/lib/utils";

type CheckboxProps = Omit<React.ComponentProps<"input">, "type"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
};

function Checkbox({
  className,
  label,
  description,
  ...props
}: CheckboxProps) {
  return (
    <label
      data-slot="checkbox-field"
      className={cn(
        "inline-flex max-w-sm items-start gap-3 rounded-2xl px-2 py-1.5",
        props.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      )}
    >
      <input
        type="checkbox"
        data-slot="checkbox"
        className={cn(
          "mt-0.5 size-5 shrink-0 appearance-none rounded-md border-2 border-muted-foreground/45 bg-card transition-colors checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15 disabled:cursor-not-allowed",
          "checked:bg-[linear-gradient(135deg,transparent_0_18%,white_18%_28%,transparent_28%_44%,transparent_44%_58%,white_58%_68%,transparent_68%)]",
          className
        )}
        {...props}
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

export { Checkbox };
