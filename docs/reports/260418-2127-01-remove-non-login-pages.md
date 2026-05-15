# 작업 기록 - 로그인 외 페이지 구현 제거

- 일시: 2026-04-18 21:27 KST
- 작성자: Austin Jung
- 에이전트: Codex
- 작업 유형: 라우트 정리, 화면 구현 제거

## 요약

- 현재 구현 페이지 중 로그인 화면만 남기고 나머지 페이지 구현을 제거했습니다.
- 홈, 마이페이지, 멘토 상세, 개발용 컴포넌트 북 라우트와 대응 위젯을 모두 삭제했습니다.
- 로그인 화면에서 삭제된 라우트로 가던 링크도 함께 제거했습니다.

## 변경 범위

- `/`, `/my`, `/mentor/[id]`, `/dev/components` 엔트리 제거
- 대응 `widgets` 구현 제거
- 로그인 화면의 죽은 링크 제거
- 구조 문서와 제품 계획 문서 갱신

## 주요 파일

- `src/app/(auth)/login/page.tsx`
- `src/widgets/auth/login-screen.tsx`
- `src/shared/config/site.ts`
- `docs/01-folder-architecture.md`
- `docs/03-product-plan.md`

## 리스크

- 기존에 확인용으로 쓰던 개발용 컴포넌트 북도 같이 제거되었습니다.
- `/`, `/my`, `/mentor/[id]`는 이제 404가 됩니다.

## 다음 작업

- 로그인 플로우와 인증 연동에 집중해 구현을 이어갑니다.
- 다른 화면이 다시 필요해지면 요구사항 정리 후 재구현합니다.

## 참고

- 관련 문서:
  - `docs/01-folder-architecture.md`
  - `docs/03-product-plan.md`
