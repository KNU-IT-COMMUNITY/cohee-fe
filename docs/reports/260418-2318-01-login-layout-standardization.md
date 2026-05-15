# 작업 기록 - 로그인 화면 레이아웃 정석화

- 일시: 2026-04-18 23:18 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: 로그인 UI 레이아웃 개선

## 요약

- 로그인 화면을 모바일 기기 모형처럼 보이는 단일 카드 중심 배치에서, 일반적인 인증 페이지 레이아웃으로 재정리했습니다.
- 모바일에서는 중앙 정렬된 단일 인증 패널을 우선 보여주고, 큰 화면에서는 소개 영역과 로그인 패널이 분리된 2열 구조로 확장되도록 조정했습니다.
- 인증 패널의 폭과 여백, 배경 무드, 카드 비율을 함께 다듬어 좌측에 붙어 보이던 인상을 제거했습니다.

## 변경 범위

- `src/app/(auth)/layout.tsx`
- `src/widgets/auth/auth-screen-shell.tsx`
- `src/widgets/auth/login-screen.tsx`

## 주요 변경

- auth route layout의 최대 폭 컨테이너를 도입해 전체 화면을 중앙 기준으로 정렬했습니다.
- 로그인 패널 래퍼를 모바일 디바이스 프레임처럼 보이던 좁은 카드에서 보다 일반적인 인증 카드 비율로 수정했습니다.
- 로그인 화면 본문은 모바일에서 중앙 정렬, 데스크톱에서만 2열 분할이 되도록 grid 정렬 방식을 조정했습니다.
- 소개 카드 3종은 보조 정보로 유지하되, 로그인 폼보다 구조적으로 앞서 나가지 않도록 배치했습니다.

## 검증

- `pnpm lint`
- `pnpm build`
- `pnpm build-storybook`

## 참고

- 런타임 규칙 확인: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/layout.md`
