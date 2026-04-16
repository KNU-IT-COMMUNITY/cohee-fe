import Link from "next/link";

import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";

type MentorDetailScreenProps = {
  id: string;
};

const mentorSections = [
  {
    title: "Summary",
    body: "멘토 이름, 태그, 소개 문구가 들어올 영역입니다.",
  },
  {
    title: "Availability",
    body: "가능 시간, 방식, 대상 조건 등 운영 정보가 들어옵니다.",
  },
  {
    title: "Action",
    body: "신청하기, 저장하기, 공유하기 같은 후속 액션을 배치합니다.",
  },
] as const;

export function MentorDetailScreen({ id }: MentorDetailScreenProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#fdfdfb_0%,_#f2f6ef_100%)] px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-border/70 bg-white p-8 shadow-[0_28px_90px_-54px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                Mentor
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                멘토 상세 #{id}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                현재는 데이터 연결 전 단계라서 구조 중심의 멘토 상세 화면을 제공합니다.
                실제 조회 로직은 `docs/todo/mentor-data-connection.md` 기준으로
                이어서 구현하면 됩니다.
              </p>
            </div>

            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.routes.my}>내 화면으로</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {mentorSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.5rem] border border-border/70 bg-muted/30 p-5"
              >
                <h2 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
