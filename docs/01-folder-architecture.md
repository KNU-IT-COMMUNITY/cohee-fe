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
│  ├─ mentor/[id]
│  ├─ login
│  ├─ my
│  ├─ globals.css
│  └─ layout.tsx
├─ entities
├─ features
├─ shared
│  ├─ config
│  ├─ lib
│  └─ ui
└─ widgets
   ├─ auth
   ├─ mentor
   ├─ home
   └─ profile
```

## 레이어 책임

- `src/app`
  `layout.tsx`, `page.tsx` 같은 App Router 엔트리 파일을 둡니다.

- `src/widgets`
  화면을 구성하는 재사용 가능한 뷰 블록을 둡니다.
  현재는 `home`, `auth`, `profile`, `mentor` 위젯이 여기에 위치합니다.

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
  서비스 소개 및 주요 진입 경로를 제공하는 랜딩 페이지

- `/login`
  로그인 진입 페이지
  카카오 로그인과 구글 로그인 도입을 위한 인증 진입 페이지

- `/my`
  마이페이지

- `/mentor/[id]`
  멘토 상세페이지

## 미확정 사항

- OAuth 연동 방식과 세션 정책은 추후 확정이 필요합니다.
- 백엔드 API 계약과 연동 규격은 추후 확정이 필요합니다.
