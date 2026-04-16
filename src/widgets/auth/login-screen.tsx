import Link from "next/link";

import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";

export function LoginScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,_#f8fbf5_0%,_#eef4e6_100%)] px-6 py-12">
      <section className="w-full max-w-md rounded-[2rem] border border-border/70 bg-white p-8 shadow-[0_28px_80px_-46px_rgba(29,60,25,0.4)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
          Login
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          인증 플로우 자리잡기
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          이 화면은 구조 적용용 플레이스홀더입니다. 실제 로그인 폼과 세션
          처리는 `docs/todo/auth-api-integration.md`에 후속 작업으로 정리해두었습니다.
        </p>

        <div className="mt-8 space-y-3 rounded-[1.5rem] bg-muted/60 p-5 text-sm leading-6 text-muted-foreground">
          <p>예정 항목</p>
          <p>카카오 로그인</p>
          <p>구글 로그인</p>
          <p>실패 메시지와 세션 유지 전략</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Button asChild className="flex-1">
            <Link href={siteConfig.routes.home}>홈으로</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href={siteConfig.routes.my}>내 화면</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
