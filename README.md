이 저장소는 `KNU 커피챗` 프런트엔드입니다.

현재 저장소는 `austin-docs-architecture`를 참고해 다음 구조를 사용합니다.

- 라우트 엔트리 파일은 `src/app`
- 재사용 가능한 화면 블록은 `src/widgets`
- 공통 모듈은 `src/shared`
- 에이전트와 개발자 참고 문서는 `docs`

## 시작하기

개발 서버 실행:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 개발 메모

- `pnpm dev` runs `next dev --webpack`.
- This repository uses Webpack by default as a temporary fallback because `next dev` with the default Turbopack bundler can enter an infinite recompilation loop in the current `Next.js 16.2.2` setup.
- To reproduce or re-check the Turbopack behavior later, run `pnpm dev:turbopack`.

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 결과를 확인할 수 있습니다.

랜딩 페이지는 `src/app/page.tsx`부터 수정하면 됩니다.

## 프로젝트 문서

- `docs/01-folder-architecture.md`
- `docs/02-specs.md`
- `docs/03-product-plan.md`
- `docs/todo/00-todo-list.md`

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 를 사용해 폰트를 최적화합니다.

## 참고

Next.js 관련 자료:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

배포 관련 참고:

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
