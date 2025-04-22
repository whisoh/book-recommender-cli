This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Project Structure & Enhancements

This frontend implements:

1. **UI/UX Enhancements:**
   - Consistent layout with header, footer, navigation.
   - Responsive, accessible design (TailwindCSS, dark mode).
   - Loading, error, and empty states for all async data.
2. **Componentization:**
   - Reusable components: `BookCard`, `BookList`, `PreferencesForm`, `ThemeToggle`, `ErrorBoundary`.
3. **State Management:**
   - Global preferences via React Context (`/context/PreferencesContext.tsx`).
4. **Mock Data & API Layer:**
   - Mock book data and async fetch simulation (`/mocks/mockBooks.ts`).
5. **Forms & Validation:**
   - Preferences form with validation and feedback.
6. **Styling & Theming:**
   - TailwindCSS, dark/light mode toggle, accessible components.
7. **Routing & Navigation:**
   - Next.js app directory routing; navigation via header.
8. **Testing:**
   - Example test for `BookCard` in `/__tests__/BookCard.test.tsx` (React Testing Library).
9. **Documentation:**
   - This README documents structure and workflow.

## Development Workflow
- Edit or add components in `/components`.
- Use `/mocks` for mock data and API simulation.
- Use `/context` for global state.
- Run tests with `npm test` (ensure `@testing-library/react` is installed).

---
