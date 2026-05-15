import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";

type TextFieldProps = React.ComponentProps<typeof Input> & {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
};

function TextField({
  className,
  label,
  helperText,
  errorText,
  "aria-invalid": ariaInvalid,
  ...props
}: TextFieldProps) {
  const invalid = Boolean(errorText) || ariaInvalid === true || ariaInvalid === "true";

  return (
    <label data-slot="text-field" className="grid w-full gap-2">
      {label ? (
        <span className="text-sm font-medium text-foreground">{label}</span>
      ) : null}
      <Input
        className={cn(
          "rounded-[1.15rem]",
          invalid &&
            "border-destructive focus-visible:border-destructive/50 focus-visible:ring-destructive/15",
          className
        )}
        aria-invalid={invalid}
        {...props}
      />
      {errorText || helperText ? (
        <span
          className={cn(
            "text-xs leading-5 text-muted-foreground",
            errorText && "text-destructive"
          )}
        >
          {errorText || helperText}
        </span>
      ) : null}
    </label>
  );
}

export { TextField };
