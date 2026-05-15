# 작업 기록 - Storybook 기본 Material Shared UI 정리

- 일시: 2026-04-22 10:57 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: Storybook 컴포넌트 북 범위 조정

## 요약

- Storybook에서 페이지, 위젯, 디자인 토큰 문서를 제거하고 `Shared UI` 기본 컴포넌트만 남겼습니다.
- 기본 Material 스타일 컴포넌트 5개를 구성했습니다.
- Storybook preview가 컴포넌트 하나에 비해 과도하게 커지던 원인인 전역 `min-h-screen` 래퍼를 제거했습니다.

## 변경 범위

- `.storybook/preview.tsx`
- `.storybook/preview.css`
- `src/shared/ui/card.tsx`
- `src/shared/ui/checkbox.tsx`
- `src/shared/ui/switch.tsx`
- `src/shared/ui/text-field.tsx`
- `src/stories/*`
- `docs/01-folder-architecture.md`
- `docs/02-specs.md`

## 현재 Storybook 컴포넌트

- `Button`
- `TextField`
- `Card`
- `Checkbox`
- `Switch`

## 검증

- `pnpm lint`
- `pnpm build-storybook`

## 참고

- `sb-anchor`가 크게 보이던 직접 원인은 Storybook 전역 decorator의 `min-h-screen` 클래스였습니다.
