# 스펙

이 문서는 현재 프런트엔드 구현 기준을 정리합니다.

## 런타임 및 툴링

- 프레임워크: `Next.js 16.2.2`
- UI 런타임: `React 19.2.4`
- 언어: `TypeScript 5` with `strict: true`
- 패키지 매니저: `pnpm`
- 스타일링: `Tailwind CSS v4`
- UI 보조 라이브러리: `shadcn`, `class-variance-authority`, `clsx`, `tailwind-merge`

## Next.js 규칙

- App Router는 `src/app` 기준으로 사용합니다.
- `<html>`, `<body>`는 `src/app/layout.tsx`에서만 렌더링합니다.
- 라우트 페이지는 기본적으로 Server Component로 작성합니다.
- 브라우저 API, 로컬 인터랙션, 클라이언트 전용 상태가 필요할 때만 `"use client"`를 추가합니다.
- 프레임워크 수준 패턴을 도입할 때는 `node_modules/next/dist/docs/`의 로컬 문서를 우선 확인합니다.

## TypeScript 및 import 규칙

- 경로 alias: `@/* -> src/*`
- 라우트 엔트리 파일은 얇게 유지하고 재사용 UI는 `src/widgets`로 분리합니다.
- 범용 유틸은 `src/shared/lib`에 둡니다.
- 공통 UI 프리미티브는 `src/shared/ui`에 둡니다.

## 스타일링 규칙

- 전역 토큰은 `src/app/globals.css`에 둡니다.
- 반복되는 하드코딩 값보다 CSS 변수 기반의 의미 있는 토큰 사용을 우선합니다.
- 일회성 버튼 마크업을 새로 만들기보다 공통 `Button` 프리미티브를 우선 사용합니다.

## 데이터 및 상태 관리

- 아직 별도의 서버 상태 관리 라이브러리는 도입하지 않았습니다.
- 우선은 내장 Server Component와 `fetch` 패턴을 사용합니다.
- 실제 API 연동과 캐시 요구사항이 생길 때만 별도 데이터/상태 관리 라이브러리를 도입합니다.

## 개발 메모

- `pnpm dev`는 `next dev --webpack`을 실행합니다.
- `pnpm dev:turbopack`은 현재 Turbopack 동작을 다시 점검할 때 사용합니다.
- 동적 라우트 `params`는 현재 저장소에서 사용하는 Next.js App Router 타입 스타일을 따릅니다.
  예: `params: Promise<{ id: string }>`

## 미확정 연동 사항

- 백엔드는 `Spring Boot` 기반일 가능성이 높지만, 현재 저장소 기준으로는 확정된 API 계약 문서가 없습니다.
- 로그인은 카카오 로그인과 구글 로그인을 기준으로 준비합니다.
- OAuth 연동 세부 방식과 세션 정책은 아직 확정되지 않았습니다.
