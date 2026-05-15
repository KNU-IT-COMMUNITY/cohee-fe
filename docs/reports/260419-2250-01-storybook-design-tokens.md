# 작업 기록 - Storybook 디자인 토큰 문서 추가

- 일시: 2026-04-19 22:50 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: Storybook 문서 확장

## 요약

- Storybook에 `Foundations/Design Tokens` 문서를 추가했습니다.
- `src/app/globals.css`의 semantic token을 light와 dark 기준으로 모두 확인할 수 있도록 구성했습니다.
- 색상, 폰트, radius, shadow를 실제 computed value와 함께 노출하도록 만들었습니다.

## 변경 범위

- `.storybook/preview.tsx`
- `src/stories/01-design-tokens.mdx`
- `src/stories/design-token-docs.tsx`
- `src/stories/00-overview.mdx`
- `docs/01-folder-architecture.md`
- `docs/02-specs.md`

## 주요 변경

- Storybook 정렬 그룹에 `Foundations`를 추가했습니다.
- 토큰 문서는 `globals.css`를 source of truth로 삼고, Tailwind utility 이름과 실제 CSS 변수 값을 함께 보여줍니다.
- light/dark 테마를 좌우로 병렬 배치해 토큰 변화를 바로 비교할 수 있게 했습니다.

## 검증

- `pnpm lint`
- `pnpm build-storybook`

## 참고

- 디자인 토큰 source of truth: `src/app/globals.css`
