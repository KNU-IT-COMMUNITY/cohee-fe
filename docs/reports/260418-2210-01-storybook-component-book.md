# 작업 기록 - Storybook 기반 컴포넌트 북 도입

- 일시: 2026-04-18 22:10 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: 컴포넌트 문서화 도구 도입

## 요약

- 커스텀 App Router 기반 북을 제거하고 Storybook 10 기반 컴포넌트 북으로 전환했습니다.
- Storybook은 docs-only 모드 실행을 기본으로 두고, 로그인 UI 관련 stories와 overview 문서를 구성했습니다.
- 기본 예제 스토리와 자산은 모두 제거하고 저장소 전용 구성만 남겼습니다.

## 변경 범위

- `.storybook` 설정 정리
- Storybook 의존성 및 실행 스크립트 추가
- 로그인 UI용 story, docs overview 추가
- 기존 커스텀 `/dev/components` 제거
- 구조/스펙 문서 갱신

## 주요 파일

- `.storybook/main.ts`
- `.storybook/preview.ts`
- `src/stories/00-overview.mdx`
- `src/stories/button.stories.tsx`
- `src/stories/input.stories.tsx`
- `src/stories/auth-screen-shell.stories.tsx`
- `src/stories/login-screen.stories.tsx`
- `package.json`

## 리스크

- Storybook은 별도 개발 서버이므로 앱 라우트 안에서 직접 열리지는 않습니다.
- 현재 docs-only 모드 기준이라 interactive canvas 중심 워크플로우는 `pnpm storybook:full`로 따로 열어야 합니다.

## 다음 작업

- 새 공통 프리미티브가 생기면 story를 같은 구조로 추가합니다.
- 필요하면 MDX 문서를 더 추가해 토큰, 접근성, 폼 규칙까지 확장합니다.

## 참고

- 관련 문서:
  - `docs/01-folder-architecture.md`
  - `docs/02-specs.md`
