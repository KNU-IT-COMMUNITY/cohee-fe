import Link from "next/link";

import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";

const sections = [
  {
    title: "Upcoming",
    body: "예정된 커피챗 일정과 참여 상태를 이 영역에 배치합니다.",
  },
  {
    title: "Saved Profiles",
    body: "관심 있는 프로필이나 다시 보고 싶은 상세 항목을 모아둡니다.",
  },
  {
    title: "Account Checklist",
    body: "프로필 완성도, 인증 상태, 후속 액션을 점검합니다.",
  },
] as const;

export function MyDashboardScreen() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fbfcfa_0%,_#f1f4ef_100%)] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-border/70 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.35)] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
              My
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
              사용자 중심 화면의 기본 뼈대
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              추후 실제 사용자 정보, 저장 목록, 신청 내역이 들어올 자리를
              위젯 단위로 미리 분리해두었습니다.
            </p>
          </div>

          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.routes.sampleMentor}>샘플 멘토 보기</Link>
          </Button>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-border/70 bg-white/90 p-6"
            >
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
