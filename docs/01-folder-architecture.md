# 폴더 아키텍처

이 프로젝트는 `KNU 커피챗` 프런트엔드입니다.

현재 구조의 핵심 목표는 다음과 같습니다.

- `Next.js 16 App Router` 엔트리 파일을 얇게 유지
- 재사용 가능한 화면 단위를 `widgets`로 분리
- 공통 로직과 UI를 `shared`에 집중
- 아직 확정되지 않은 도메인 모델은 무리하게 세분화하지 않기

## 최상위 구조

```txt
root
├─ .storybook
├─ docs
│  ├─ 01-folder-architecture.md
│  ├─ 02-specs.md
│  ├─ 03-product-plan.md
│  ├─ reports
│  └─ todo
├─ public
├─ src
│  ├─ app
│  ├─ entities
│  ├─ features
│  ├─ shared
│  └─ widgets
├─ AGENTS.md
├─ package.json
└─ tsconfig.json
```

## 소스 구조

```txt
src
├─ app
│  ├─ (auth)/login
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ (auth)/layout.tsx
├─ entities
├─ features
├─ shared
│  ├─ config
│  ├─ lib
│  └─ ui
└─ widgets
   ├─ auth
   └─ (기타 화면 위젯은 추후 재도입 예정)
```

## 레이어 책임

- `.storybook`
  Storybook 설정을 둡니다.
  현재는 페이지 예시 없이 기본 공통 UI 컴포넌트를 문서형 컴포넌트 북으로 확인하는 개발용 도구로 사용합니다.

- `src/app`
  `layout.tsx`, `page.tsx` 같은 App Router 엔트리 파일을 둡니다.
  인증 계열 공통 화면 크롬은 route group인 `src/app/(auth)`의 `layout.tsx`에서 관리합니다.

- `src/widgets`
  화면을 구성하는 재사용 가능한 뷰 블록을 둡니다.
  현재는 로그인 화면용 `auth` 위젯을 유지합니다.

- `src/features`
  로그인 제출, 신청 액션, 프로필 수정처럼 사용자 의도가 드러나는 기능 단위를 둡니다.
  현재는 실제 비즈니스 로직이 확정되지 않아 비워 둡니다.

- `src/entities`
  사용자, 커피챗 글, 프로필 같은 도메인 모델 중심 UI와 타입을 둡니다.
  상세 도메인이 아직 확정되지 않아 비워 둡니다.

- `src/shared`
  전역 공통 모듈을 둡니다.
  디자인 시스템 UI는 `shared/ui`, 유틸은 `shared/lib`, 설정값은 `shared/config`에 둡니다.

## import 규칙

- App Router 파일은 얇게 유지하고 실제 UI 조합은 `widgets`에 위임합니다.
- `widgets`, `features`, `entities`는 `shared`를 import할 수 있습니다.
- `features`는 `entities`, `shared`를 import할 수 있습니다.
- `entities`는 `features`를 import하지 않습니다.
- 세그먼트별 `layout.tsx`는 정말 공통 UI가 필요할 때만 만듭니다.
- 루트가 아닌 `layout.tsx`에서는 `<html>`, `<body>`를 렌더링하지 않습니다.

## 현재 라우트 해석

- `/`
  현재는 별도 홈 화면을 두지 않고 `/login`으로 리다이렉트합니다.

- `/login`
  로그인 진입 페이지
  카카오 로그인과 구글 로그인 도입을 위한 인증 진입 페이지

## 현재 구현 상태

- 현재 제품 화면 구현은 `/login`만이며 `/`는 `/login`으로 리다이렉트합니다.
- 공통 UI 문서화는 App Router 페이지가 아니라 Storybook으로 관리합니다.
- `/`, `/my`, `/mentor/[id]`는 추후 요구사항이 정리되면 다시 구현합니다.

## 미확정 사항

- OAuth 연동 방식과 세션 정책은 추후 확정이 필요합니다.
- 백엔드 API 계약과 연동 규격은 추후 확정이 필요합니다.
