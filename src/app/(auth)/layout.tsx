export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,var(--auth-canvas)_0%,var(--background)_38%,var(--background)_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(80,144,212,0.16)_0%,_rgba(80,144,212,0)_74%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38vw] bg-[radial-gradient(circle_at_center,_rgba(116,157,226,0.08)_0%,_rgba(116,157,226,0)_72%)] lg:block" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
