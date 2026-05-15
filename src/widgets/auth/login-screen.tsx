import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { AuthScreenShell } from "@/widgets/auth/auth-screen-shell";

export function LoginScreen() {
  return (
    <main className="grid w-full justify-items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,34rem)] lg:items-center lg:justify-items-stretch lg:gap-16">
      <section className="order-2 w-full max-w-2xl text-center lg:order-1 lg:max-w-none lg:text-left">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
            KNU Coffee Chat
          </p>
          <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.75rem]">
            강남대 선후배를
            <br />
            가장 빠르게 연결하는
            <br />
            커피챗 입구
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            학교 이메일 기반으로 간단히 로그인하고, 선배와 후배를 잇는
            커피챗 흐름을 자연스럽게 시작할 수 있도록 준비한 인증 화면입니다.
          </p>
        </div>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
          {[
            {
              title: "학교 인증",
              body: "강남대학교 소속 사용자를 기준으로 계정 진입 흐름을 정리합니다.",
            },
            {
              title: "간결한 동선",
              body: "이메일 로그인과 소셜 로그인 동선을 한 화면에서 바로 제공합니다.",
            },
            {
              title: "확장 준비",
              body: "OAuth 연동과 실패 메시지, 세션 정책을 이후 단계에서 연결합니다.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.25)] backdrop-blur"
            >
              <h2 className="text-sm font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <AuthScreenShell
        className="order-1 lg:order-2 lg:justify-self-end"
        brand="KNU IT Coffee Chat"
        title={
          <>
            선배와 후배를 잇는
            <br />
            강남대 IT 커피챗 <span aria-hidden>☕</span>
          </>
        }
        description="학교 이메일로 자유롭게 커피챗을 요청해보세요."
      >
        <div className="space-y-5">
          <div className="space-y-2.5">
            <label
              htmlFor="school-email"
              className="text-sm font-semibold text-foreground"
            >
              학교 이메일
            </label>
            <Input
              id="school-email"
              type="email"
              placeholder="example@kangnam.ac.kr"
              autoComplete="username"
            />
          </div>

          <div className="space-y-2.5">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-foreground"
            >
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호 입력"
              autoComplete="current-password"
            />
          </div>

          <Button
            type="button"
            className="mt-2 h-14 w-full rounded-2xl bg-auth-brand text-base font-semibold text-white shadow-auth-button hover:bg-auth-brand-hover"
          >
            로그인하기
          </Button>

          <div className="flex items-center justify-center gap-4 pt-1 text-sm font-medium text-muted-foreground">
            <span>회원가입</span>
            <span
              aria-hidden
              className="h-3.5 w-px rounded-full bg-border"
            />
            <span>비밀번호 찾기</span>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.02em] text-muted-foreground/80">
            <span className="h-px flex-1 bg-border" />
            <span>또는 소셜 로그인</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              type="button"
              className="h-12 rounded-2xl bg-[#FEE500] text-sm font-semibold text-[#191919] shadow-none hover:bg-[#f4de00]"
            >
              카카오
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-2xl border-auth-border bg-white text-sm font-semibold text-foreground shadow-none hover:bg-white"
            >
              Google
            </Button>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] bg-auth-muted px-5 py-4 text-sm leading-6 text-muted-foreground">
          실제 로그인 제출, OAuth 연동, 실패 메시지와 세션 정책은
          `docs/todo/auth-api-integration.md` 기준으로 이어서 구현합니다.
        </div>
      </AuthScreenShell>
    </main>
  );
}
