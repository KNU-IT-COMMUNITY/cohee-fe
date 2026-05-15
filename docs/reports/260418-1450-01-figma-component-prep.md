# 작업 기록 - Figma 기반 공통 컴포넌트 선행 준비

- 일시: 2026-04-18 14:50 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: 분석 준비, 컴포넌트 선행 설계

## 요약

- `docs/01-folder-architecture.md`, `docs/02-specs.md`, `docs/03-product-plan.md`, `docs/todo/00-todo-list.md`를 기준으로 현재 프로젝트 구조와 라우트 범위를 다시 정리했습니다.
- 기존 공통 UI와 토큰 상태를 점검해, Figma 이미지 분석 결과가 들어오면 어디를 `shared` 프리미티브로 끌어올릴지 기준을 정리했습니다.
- Figma MCP 접근을 시도했지만 현재 세션에서는 대상 노드에 접근할 수 없어 이미지 전수 분석은 보류되었습니다.
- 접근이 복구되면 바로 이어서 사용할 수 있도록 화면 분석 절차, 컴포넌트 분해 기준, 우선 후보군을 문서화했습니다.

## 변경 범위

- Figma 기반 컴포넌트 준비용 작업 기록 문서 추가
- 후속 작업 TODO 추가 및 목록 반영

## 주요 파일

- `docs/01-folder-architecture.md`
- `docs/02-specs.md`
- `docs/03-product-plan.md`
- `docs/todo/00-todo-list.md`
- `src/shared/ui/button.tsx`
- `src/shared/ui/input.tsx`
- `src/widgets/auth/auth-screen-shell.tsx`
- `src/widgets/auth/login-screen.tsx`
- `src/widgets/profile/my-dashboard-screen.tsx`
- `src/widgets/mentor/mentor-detail-screen.tsx`

## 현재 기준 정리

- 라우트 범위는 `/`, `/login`, `/my`, `/mentor/[id]` 네 축입니다.
- 엔트리 파일은 `src/app`에 두고, 실제 화면 조합은 `src/widgets`에 위임하는 구조입니다.
- 공통 UI는 `src/shared/ui`, 공통 유틸은 `src/shared/lib`, 전역 토큰은 `src/app/globals.css`에 둡니다.
- 기본 구현 원칙은 Server Component 우선이며, 인터랙션이 필요한 지점에만 `"use client"`를 둡니다.

## 현재 공통 UI 상태

- 이미 존재하는 프리미티브
  - `Button`
  - `Input`
  - `AuthScreenShell`
- 이미 준비된 토큰 축
  - 일반 표면 색상과 경계선 토큰
  - 인증 화면 전용 `auth-*` semantic token
  - 브랜드용 `font-brand`

## Figma 분석이 열리면 바로 볼 항목

- 이미지가 어떤 프레임 단위로 정리되어 있는지
- 화면별 반복 패턴이 어디까지 동일한지
- 버튼, 카드, 탭, 배지, 섹션 헤더, 필드, 리스트 아이템이 같은 컴포넌트 계열인지
- 텍스트 위계가 전역 scale로 묶일 수 있는지
- radius, gap, surface, border, shadow가 토큰화 가능한 수준으로 반복되는지
- 이미지 위에 얹히는 오버레이, 블러, 그래디언트가 공통 장식 레이어인지
- 모바일/데스크톱 변형이 독립 컴포넌트인지 반응형 규칙으로 풀 수 있는지

## 공통 컴포넌트 분해 기준

- `shared/ui`
  - 여러 라우트에서 반복되고 도메인 의미가 약한 프리미티브만 둡니다.
  - 예: 버튼, 입력, 필드 래퍼, 배지, 카드, 섹션 헤더, 아바타, 탭 트리거
- `widgets`
  - 화면 의미가 강한 조합 블록을 둡니다.
  - 예: 로그인 hero, 멘토 요약 패널, 마이페이지 요약 대시보드
- `entities`
  - 프로필 카드, 멘토 메타 정보처럼 도메인 구조가 확정되면 옮길 후보입니다.
  - 현재는 제품 도메인이 아직 얕아 섣불리 분리하지 않습니다.

## 우선 후보 컴포넌트

- `FormField`
  - 라벨, 설명, 오류, 입력 프리미티브를 묶는 공통 골격
- `SurfaceCard`
  - 배경, 보더, radius, shadow 조합을 표준화하는 카드 래퍼
- `SectionHeader`
  - eyebrow, title, description, action slot 조합
- `MetaBadge` 또는 `TagChip`
  - 상태, 역할, 관심사, 카테고리 표시에 쓰일 소형 라벨
- `AvatarBlock`
  - 프로필 이미지, fallback, 보조 메타 조합
- `InfoRow`
  - 아이콘 또는 레이블과 값의 짝을 반복 렌더링하는 행 단위 컴포넌트
- `ActionCluster`
  - 주요 CTA, 보조 CTA, 저장/공유류 액션 그룹

## 보류 사유

- Figma MCP에서 다음 응답이 반환되어 실제 노드를 읽지 못했습니다.
  - 리소스 접근 불가
  - Dev Mode 접근 권한, 파일 권한, 유효한 링크 확인 필요
- 따라서 현재 단계에서는 이미지 전수 분석 결과를 근거로 한 실제 컴포넌트 생성까지 진행하지 않았습니다.

## 다음 작업

- Figma 파일 또는 정확한 노드 링크를 확보합니다.
- 각 화면 이미지를 프레임 단위로 읽고 스크린샷과 구조를 함께 수집합니다.
- 반복 패턴을 기준으로 `shared/ui`와 `widgets` 후보를 확정합니다.
- 확정된 후보부터 토큰 정리와 프리미티브 구현에 들어갑니다.

## 참고

- 관련 문서:
  - `docs/01-folder-architecture.md`
  - `docs/02-specs.md`
  - `docs/03-product-plan.md`
  - `docs/todo/00-todo-list.md`
