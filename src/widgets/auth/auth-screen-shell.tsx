import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type AuthScreenShellProps = {
  brand?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function AuthScreenShell({
  brand,
  title,
  description,
  children,
  className,
}: AuthScreenShellProps) {
  return (
    <section className={cn("w-full max-w-xl", className)}>
      <div className="overflow-hidden rounded-[1.75rem] border border-auth-border bg-auth-surface px-6 pb-8 pt-7 shadow-auth-panel sm:px-8 sm:pb-9">
        {brand ? (
          <p className="font-brand text-sm font-semibold tracking-tight text-auth-brand">
            {brand}
          </p>
        ) : null}

        <h1 className="mt-3 text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-[2.25rem]">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground sm:text-[15px]">
            {description}
          </p>
        ) : null}

        <div className="mt-9">{children}</div>
      </div>
    </section>
  );
}
