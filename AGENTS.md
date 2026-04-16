<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Working Agreement

이 저장소는 `Next.js 16 App Router` 위에 가벼운 FSD 친화 구조를 얹어 사용합니다.

## 매 작업 전 읽기

- `docs/01-folder-architecture.md`
- `docs/02-specs.md`
- `docs/03-product-plan.md`
- `docs/todo/00-todo-list.md`

## 프로젝트 규칙

- 라우트 엔트리 파일은 `src/app`에 둡니다.
- 공통 모듈은 `src/shared`에 둡니다.
- 재사용 가능한 화면 블록은 `src/widgets`에 둡니다.
- `src/app/layout.tsx` 바깥에서는 `<html>`, `<body>`를 렌더링하지 않습니다.
- 기본은 Server Component로 작성하고, 브라우저 API나 인터랙션이 필요할 때만 `"use client"`를 추가합니다.
- 공통 UI는 `@/shared/ui`, 공통 유틸은 `@/shared/lib`를 우선 사용합니다.

## 문서 규칙

- 폴더 책임이 바뀌면 `docs/01-folder-architecture.md`를 갱신합니다.
- 런타임, 라이브러리, 구현 규칙이 바뀌면 `docs/02-specs.md`를 갱신합니다.
- 라우트 범위나 제품 정의가 바뀌면 `docs/03-product-plan.md`를 갱신합니다.
- 구조 변경이나 기록이 필요한 작업은 `docs/reports`에 남깁니다.
- 아직 처리하지 못한 후속 작업은 `docs/todo`에 추가하고 `docs/todo/00-todo-list.md`와 함께 맞춥니다.
