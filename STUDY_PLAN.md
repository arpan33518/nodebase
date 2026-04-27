# 📚 Nodebase — 8-Day Study Plan
> One feature per day. Copy the prompt, send it to Antigravity, study the files, answer the questions from memory.

---

## How to Use This

1. Each day has a **prompt** — copy it and send it to me
2. I will explain every file in that day's session
3. After I explain, **close the files** and write from memory:
   - What does this file do?
   - What does it depend on?
   - What would break without it?
4. Check yourself by reopening the file

---

## 📅 Day 1 — Project Config, Setup & Monitoring

**Prompt to send:**
```
Study session Day 1: Explain these config files in my Nodebase project one by one.
For each file tell me: what it does, why it exists, and what would break without it.
Files:
- package.json
- .env
- .env.sentry-build-plugin
- next.config.ts
- tsconfig.json
- prisma.config.ts
- biome.json
- src/app/layout.tsx
- src/app/globals.css
- src/config/constants.ts
- src/lib/utils.ts
- sentry.server.config.ts
- sentry.edge.config.ts
- src/instrumentation.ts
- src/instrumentation-client.ts
- src/app/global-error.tsx
```

**Files to open:**
- `package.json`
- `.env`
- `.env.sentry-build-plugin`
- `next.config.ts`
- `tsconfig.json`
- `prisma.config.ts`
- `biome.json`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/config/constants.ts`
- `src/lib/utils.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `src/instrumentation.ts`
- `src/instrumentation-client.ts`
- `src/app/global-error.tsx`

**Questions to answer from memory after:**
- What is the `@/` alias and where is it defined?
- What are 5 key libraries in `package.json` and why each is used?
- What secrets does the app need to run?
- What is Sentry and why do we need it in production?
- What is the difference between `sentry.server.config.ts` and `sentry.edge.config.ts`?
- What does `instrumentation.ts` do and when does Next.js call it?

---

## 📅 Day 2 — Database Schema (Prisma)

**Prompt to send:**
```
Study session Day 2: Explain my Prisma schema in Nodebase project.
For every model and enum, explain:
- What real-world thing does this represent?
- What are its most important fields and why?
- How does it relate to other models?
- Why are certain fields optional or required?
Files:
- prisma/schema.prisma
- src/lib/db.ts
- src/lib/prisma.ts
```

**Files to open:**
- `prisma/schema.prisma`
- `src/lib/db.ts`
- `src/lib/prisma.ts`

**Questions to answer from memory after:**
- Draw the relationships between User, Workflow, Node, Connection on paper
- Why does Connection have `fromOutput` and `toInput` fields?
- Why is `nodes` stored as a String in Workflow but also as a separate Node model?
- Why does `lib/db.ts` exist instead of just importing Prisma directly everywhere?

---

## 📅 Day 3 — Authentication (Better Auth)

**Prompt to send:**
```
Study session Day 3: Explain the authentication system in my Nodebase project.
For each file, tell me what it does, why it's needed, and how it connects to other files.
Files:
- src/lib/auth.ts
- src/lib/auth-client.ts
- src/lib/auth-utils.ts
- src/app/api/auth/[...all]/route.ts (the auth API handler)
- src/app/(auth)/layout.tsx
- src/app/(auth)/login/page.tsx
- src/app/(auth)/signup/page.tsx
- src/app/page.tsx (the root landing/redirect page)
- src/features/auth/components/login-form.tsx
- src/features/auth/components/register-form.tsx
- src/features/auth/components/logout-button.tsx
- src/features/auth/components/auth-layout.tsx
```

**Questions to answer from memory after:**
- How does the app know if a user is logged in on the server side?
- How does the app know if a user is logged in on the client side?
- What happens step by step when a user clicks "Login"?
- Where does the user's session get stored?

---

## 📅 Day 4 — tRPC Setup & Workflow API

**Prompt to send:**
```
Study session Day 4: Explain the tRPC setup and workflow API in my Nodebase project.
For each file, explain what it does and why it's structured that way.
Files:
- src/trpc/init.ts
- src/trpc/client.tsx
- src/trpc/server.tsx
- src/trpc/query-client.ts
- src/trpc/routers/_app.ts
- src/app/api/trpc/[trpc]/route.ts (the tRPC HTTP handler)
- src/features/workflows/server/routers.ts
- src/features/workflows/server/prefetch.tsx
- src/features/workflows/server/params-loader.ts
- src/lib/polar.ts (billing/subscription client setup)
- src/features/subscriptions/hooks/use-subscription.ts
```

**Questions to answer from memory after:**
- What is the difference between `protectedProcedure` and `premiumProcedure`?
- What is the difference between a `query` and a `mutation` in tRPC?
- Walk through what happens when the frontend calls `trpc.workflows.getMany.useQuery()`
- Why does the `update` procedure use a Prisma `$transaction`?
- What does `prefetch.tsx` do and why is it on the server?

---

## 📅 Day 5 — Inngest (Background Jobs)

**Prompt to send:**
```
Study session Day 5: Explain the Inngest background job system in my Nodebase project.
For each file, explain what it does, why it exists, and how data flows through it.
Files:
- src/inngest/client.ts
- src/inngest/function.ts
- src/app/api/inngest/route.ts
- src/features/workflows/server/routers.ts (only the 'execute' procedure)
- src/features/editor/components/execute-workflow-button.tsx
```

**Questions to answer from memory after:**
- What triggers the `executeWorkflow` Inngest function?
- What is `step.run()` and why is it better than just writing the code directly?
- What does `step.sleep()` do and when would you use it in production?
- Trace the full path: user clicks "Execute" → what happens all the way to Inngest?

---

## 📅 Day 6 — Workflow Dashboard UI

**Prompt to send:**
```
Study session Day 6: Explain the Workflow Dashboard UI in my Nodebase project.
For each file, explain what the user sees, what data it needs, and how it gets that data.
Files:
- src/app/(dashboard)/(rest)/workflows/page.tsx
- src/app/(dashboard)/(rest)/executions/page.tsx
- src/app/(dashboard)/(rest)/credentials/page.tsx
- src/app/(dashboard)/(rest)/credentials/[credentialId]/page.tsx
- src/app/(dashboard)/layout.tsx
- src/features/workflows/components/workflows.tsx
- src/features/workflows/hooks/use-workflows.ts
- src/features/workflows/hooks/use-workflows-params.ts
- src/features/workflows/hooks/use-upgrade-modal.tsx
- src/features/workflows/params.ts
- src/components/app-sidebar.tsx
- src/components/app-header.tsx
- src/components/upgrade-modal.tsx
- src/hooks/use-upgrade-modal.tsx
- src/hooks/use-entity-search.tsx
- src/hooks/use-mobile.ts
```

**Questions to answer from memory after:**
- How does pagination work in this dashboard?
- How does the search filter work? (hint: look at URL params)
- What triggers the upgrade modal to appear?
- What does `use-workflows.ts` return and how does the component use it?

---

## 📅 Day 7 — React Flow Editor UI

**Prompt to send:**
```
Study session Day 7: Explain the React Flow editor in my Nodebase project.
For each file, explain what it renders, what state it manages, and how it connects to the backend.
Files:
- src/app/(dashboard)/(editor)/workflows/[workflowId]/page.tsx
- src/features/editor/components/editor.tsx
- src/features/editor/components/editor-header.tsx
- src/features/editor/components/add-node-button.tsx
- src/features/editor/components/execute-workflow-button.tsx
- src/features/editor/store/atoms.ts
- src/components/react-flow/base-node.tsx
- src/components/react-flow/base-handle.tsx
- src/components/react-flow/placeholder-node.tsx
- src/components/react-flow/node-status-indicator.tsx
- src/components/workflow-node.tsx
- src/components/node-selector.tsx
- src/components/initial-node.tsx
- src/components/entity-components.tsx
```

**Questions to answer from memory after:**
- How does the editor load workflow data when the page opens?
- How does saving work? What triggers a save?
- What is a "placeholder node" and why does it exist?
- How does `base-node.tsx` relate to every other node component?
- What is stored in the editor's Jotai store (`atoms.ts`)?

---

## 📅 Day 8 — Node Types (Triggers & Executions)

**Prompt to send:**
```
Study session Day 8: Explain all node types in my Nodebase project.
For each file, explain what the node does, what UI it shows, and what data it stores.
Files:
- src/config/node-components.ts (maps NodeType enum to React component)
- src/features/triggers/base-trigger-node.tsx
- src/features/triggers/components/manual-trigger/node.tsx
- src/features/triggers/components/manual-trigger/dialog.tsx
- src/features/executions/components/base-execution-node.tsx
- src/features/executions/components/http-request/node.tsx
- src/features/executions/components/http-request/dialog.tsx
```

**Questions to answer from memory after:**
- What is the difference between a trigger node and an execution node?
- What does `base-trigger-node.tsx` provide to all trigger nodes?
- What does `base-execution-node.tsx` provide to all execution nodes?
- What data does the HTTP Request node store in `node.data`?
- How does the dialog connect to the node? (how does saving the dialog update the node?)

---

## ✅ After All 8 Days

If you can answer all the questions above from memory, you can:
1. Explain every part of this project in an interview
2. Add a new node type without looking at any tutorial
3. Add a new tRPC procedure without help
4. Start building a similar SaaS project from the same patterns

**The final test:** Close everything. On paper, draw:
- The database schema (all models + relationships)
- The request flow: user clicks a button → what files are touched → what hits the DB

If you can draw those two things, you own this project.
