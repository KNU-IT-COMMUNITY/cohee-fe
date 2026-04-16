# 작업 기록 - 아키텍처 초기 정리

- 일시: 2026-04-14 00:42 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: 아키텍처 리팩터링

## 요약

- 외부 아키텍처 템플릿을 현재 저장소에 맞게 적용했습니다.
- 폴더 구조, 스펙, 제품 범위, TODO, 작업 기록 문서를 추가했습니다.
- 프런트엔드 구조를 `src/app`, `src/widgets`, `src/shared` 중심으로 재정리했습니다.

## 변경 범위

- `AGENTS.md`
- `docs/**`
- `src/**`
- `tsconfig.json`
- `components.json`

## 주요 파일

- `docs/01-folder-architecture.md`
- `docs/02-specs.md`
- `docs/03-product-plan.md`
- `src/app/layout.tsx`
- `src/widgets/home/home-landing.tsx`

## 리스크

- 실제 API 연동은 아직 진행되지 않았습니다.
- OAuth 연동 방식과 세션 정책은 아직 확정되지 않았습니다.

## 다음 작업

- `/login`과 `/mentor/[id]`를 실제 백엔드 API에 연결합니다.

## 참고

- 관련 문서: `docs/01-folder-architecture.md`, `docs/02-specs.md`, `docs/03-product-plan.md`
