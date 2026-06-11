# Handoff: Phrasebook — 地道短语 · 例句学习

## Overview
Phrasebook is a desktop web app for **intermediate-to-advanced Chinese learners of English** to learn idiomatic phrasal verbs / phrases **in context**, the way the book *English Phrasal Verbs in Use (Advanced)* teaches them — NOT as isolated flashcards listing "one phrase, five meanings."

The core method: each **unit** presents several **personas** (e.g. "The boss", "The union representative") each speaking a short, natural first-person monologue. The target phrases are **embedded inline** in their speech and highlighted. Clicking any highlighted phrase slides out a **detail drawer** on the right showing the English definition, a "when to use it" note, register, 1–2 authentic example sentences (with text-to-speech), and synonym/annotation notes. Learned phrases get a check mark; saved phrases collect in a review list.

## About the Design Files
The files in this bundle are **design references created in HTML/CSS/React-via-Babel** — a working prototype showing the intended look and behavior. They are **not production code to ship directly**. The task is to **recreate these designs in the target codebase's environment** (React, Vue, SwiftUI, etc.) using its established component library and patterns. If no codebase exists yet, pick an appropriate modern framework (React + Vite recommended) and implement the designs there.

The prototype loads React + Babel from CDN and transpiles JSX in the browser — fine for a prototype, but a real build should compile JSX ahead of time and bundle the modules properly.

## Recommended Target Stack
**TypeScript + Vite + React.** Suggested approach:
- `npm create vite@latest phrasebook -- --template react-ts`
- Type the content model (`units.ts`): `Unit`, `Persona`, `Phrase`, `Example` interfaces matching the shapes in `units.js` below.
- One component per view (`Today`, `Library`, `Unit/PassageView`, `Saved`, `Review`), a shared `PhraseDrawer`, and a `Sidebar`. Render the drawer at the app root and portal it with `createPortal(..., document.body)`.
- Routing: the prototype uses internal state, but in a real app prefer `react-router` (`/`, `/library`, `/unit/:id`, `/saved`, `/review`) so URLs are shareable; keep the saved-row → drawer interaction as an overlay (e.g. modal route or local state) rather than a navigation.
- Tokens: port `:root` custom properties from `styles.css` verbatim into a global stylesheet (or a CSS-in-TS theme). The accent-switching is just swapping three CSS variables.
- Persist `savedList` / `learnedList` with a small typed `useLocalStorage<T>` hook.
- Replace the browser `SpeechSynthesis` TTS with the same API (typed) or a real audio source.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are all specified. Recreate the UI pixel-accurately using the target codebase's libraries. Exact tokens are listed below. **Target stack confirmed: TypeScript + Vite + React.**

---

## Screens / Views

The app is a single-page app with a fixed left sidebar (256px) and a scrollable main column (max-width 920px, centered). Routing is internal state (no URL routing in the prototype) persisted to `localStorage` under key `route`. Five views:

### 1. Sidebar (persistent, all views)
- 256px fixed column, `--surface` background, 1px right border `--line`.
- Brand block: 30px rounded-square mark (accent bg, white "P") + "Phrasebook" / subtitle "地道短语 · 例句学习".
- Nav items: 今日学习 (today), 场景库 (library), 复习 (review), 我的收藏 (saved). Active item: `--accent-tint` bg, `--accent-deep` text, weight 600. Saved item shows a count badge (accent pill) when > 0.
- Bottom "streak chip": accent-tint card showing "{n} 天" streak + cumulative learned-phrase count.

### 2. Today (今日学习)
- Eyebrow with localized current date (zh-CN, e.g. "6月7日 星期六").
- H1: "把短语,放回它生长的句子里。"
- Lead paragraph explaining the in-context method.
- Stat strip: 3 cards (已学短语 learned/total, 学习单元 unit count, 收藏待复习 saved count).
- "今日单元" section: a large UnitCard for the first/recommended unit.
- "继续探索" section: 2-column grid of remaining UnitCards.

### 3. Library (场景库)
- H1 "按单元浏览" + lead. 2-column grid of all UnitCards.

**UnitCard** (shared component): left-aligned button-card, `--surface` bg, 1px `--line` border, radius `--r-lg` (20px), 22px padding. Hover: translateY(-3px) + shadow-md + accent-tinted border. Contains: tag pill ("Unit 21 · 职场 · Work"), persona+phrase count, title (English + italic serif Chinese subtitle), intro text (tags stripped), preview chips of phrase heads, and a progress bar (`done/total` phrases learned).

### 4. Unit / Passage view (the core experience)
Route `{name:'unit', id}`. Layout:
- "← 场景库" ghost back button.
- Unit header: eyebrow "Unit 21 · 职场 · Work", H1 with English title + italic serif Chinese subtitle, and a **conic-gradient progress ring** (76px) on the right showing learned/total for the unit.
- Lead intro paragraph.
- "read-hint" pill: "点击任意高亮短语,查看含义、用法和更多例句".
- **Personas list** (vertical, gap 26px). Each persona is a 2-column grid (132px avatar column + 1fr speech bubble):
  - Avatar column: 60px circle with persona's letter + tinted bg/border (per-persona `tint` color), English role label, Chinese role label, centered.
  - Speech **bubble**: `--surface` bg, 1px border, asymmetric radius `4px 20px 20px 20px`, a CSS triangle tail pointing left at top. Contains the monologue as a serif paragraph (21px, line-height 1.72).
  - **Highlighted phrases** inside the paragraph: inline `<span role="button">`, accent-deep text, weight 600, with a `linear-gradient(transparent 60%, accent-tint 60%)` underline-highlight (use `box-decoration-break: clone` so it wraps cleanly across lines). Hover deepens the highlight. `.active` (currently open in drawer): solid accent bg + white text. `.learned`: appends a small "✓" superscript.

### 5. Saved (我的收藏)
- H1 "收藏夹" + lead. If empty: centered empty state. Otherwise a **row-list**: each row is a button showing phrase head (sans 17px) + first example (italic serif) + register pill. Clicking a row **opens the detail drawer in place** (does NOT navigate to the unit). Prev/next in the drawer steps through the saved list.

### 6. Review (复习)
- Active-recall flashcards. H1 "这句话里,该用哪个短语?". A `.flash` card shows an example sentence with the target phrase **masked as a blank "?"**. Clicking the card reveals the phrase head + the full sentence (target highlighted) + an audio button. Grade buttons "再想想" / "记住了" advance to the next card. Pool = saved phrases if ≥3 saved, else all phrases, shuffled.

### Detail Drawer (global, shared by Unit + Saved views)
- **Portaled to `document.body`** (critical: must escape the `.fade-in` view container, whose CSS animation creates a containing block that would break `position: fixed`).
- Fixed, right-aligned, full viewport height, width 460px (max 92vw). `--surface` bg, left border, large left-shadow. Slides in from the right (`translateX(40px)` + opacity).
- Scrim behind: `position: fixed; inset: 0; rgba(31,45,36,.30)`, click to close.
- Header: "来自 · {role}" + close (×) button.
- Body: register pill, phrase head (sans 32px) + audio button, English definition (serif 19px), optional Chinese gloss, "什么时候用" accent-tint box, optional "近义/批注" note line, "地道例句" section with each example (target highlighted) + per-example audio button.
- Footer: 收藏/已收藏 toggle (bookmark icon, fills accent when saved), position "n / total", prev/next icon buttons.
- Keyboard: Esc closes, ←/→ step prev/next.

---

## Interactions & Behavior
- **Click highlighted phrase** → open drawer at that phrase, mark it learned, set it active. Drawer prev/next cycles through ALL phrases in the unit (wrapping).
- **Click saved row** → open drawer at that phrase; prev/next cycles through the saved list. No route change.
- **Audio**: uses the browser `SpeechSynthesisUtterance` API, `en-US`, rate 0.92, prefers a natural en voice. Button shows play/stop and a "playing" state. In production, consider real recorded audio or a TTS service for consistent quality.
- **Animations**: views fade/translate in (`fade` keyframe, .34s). Drawer slides in (.3s cubic-bezier(.2,.8,.2,1)). Scrim fades in (.2s). Cards hover-lift .16s.
- **Responsive**: below 880px the sidebar hides and grids collapse to 1 column (prototype is desktop-first per requirements).

## State Management
Persisted to `localStorage` (JSON):
- `route` — current view `{name, id?}`.
- `savedList` — array of phrase heads the user saved.
- `learnedList` — array of phrase heads the user has opened/learned.
- `streak` — day streak (static `1` in prototype; implement real streak logic).
- Tweaks panel state (accent, font, showZh) persists via the tweaks host.

Derived: `savedSet`/`learnedSet` (Sets), per-unit and global learned counts. Drawer state is ephemeral React state: `{ items:[{ph, role, mark}], idx }` plus open/close/step handlers lifted to the App root so both Unit and Saved views share one drawer instance.

## Design Tokens
Colors (light theme):
- `--bg` #f6f5f1 · `--surface` #fffefb · `--ink` #1f2d24 · `--ink-soft` #4a5a50 · `--ink-faint` #8a978e
- `--line` #e4e2db · `--line-soft` #eeece5
- Accent (default forest, user-switchable): `--accent` #3f7d5b · `--accent-deep` #2f5e44 · `--accent-tint` #eef3ef
- Alternate accent palettes (Tweaks): terracotta [#c2603a,#9c4a2b,#f6ece6], ink blue [#2f6db0,#235487,#e9f0f8], muted violet [#7a5cc4,#5f449e,#f0ebfa]
- Per-persona avatar tints: green #3f7d5b, blue #2f6db0, terracotta #c2603a, violet #7a5cc4, teal #2f8a7a, gold #b08436

Typography:
- Sans (UI/headings): "Schibsted Grotesk", system-ui fallback. Weights 400/500/600/700.
- Serif (passages, examples, definitions): "Newsreader" (optical-size axis), italic used for Chinese subtitles. 
- Chinese: "Noto Sans SC".
- H1 36px/600/-.02em; H2 22px/600; passage 21px/1.72; example/definition 19px serif; phrase head 32px sans.

Radius: --r-sm 8px · --r-md 14px · --r-lg 20px. Bubble radius `4px 20px 20px 20px`.
Shadows: --shadow-sm (subtle), --shadow-md (hover/drawer). See styles.css for exact values.
Spacing: main padding 56px 48px 120px; card padding ~22px; section gaps 26–40px.

## Assets
- No raster images. Avatars are CSS circles with a letter. Icons are inline SVG (see `Icon` component in app-core.jsx).
- Fonts loaded from Google Fonts (Newsreader, Schibsted Grotesk, Noto Sans SC). Swap for self-hosted in production.

## Content Model
See `units.js`. A unit: `{ id, num, tag, title, titleZh, intro, personas:[...] }`. A persona: `{ role, roleZh, avatar, tint, passage, phrases }`. The `passage` string embeds markers as `[[marker text]]`; each marker key maps to an entry in `phrases`. A phrase: `{ head, def(EN), zh, register, when, syn?, examples:[{en, zh, hl}], note? }`. The prototype ships one unit (Unit 21 · Work, 6 personas, 20 phrases) transcribed faithfully from the source book page, including the user's handwritten synonym annotations (stuck in, buckle down, slug away, dive into) placed in the "近义/批注" field.

## Files
- `index.html` — entry, font + script loading order.
- `styles.css` — all design tokens and styles.
- `units.js` — content data model + flatten helpers (`window.UNITS`, `unitPhrases`, `allPhrases`).
- `app-core.jsx` — localStorage helper, `speak()` TTS, `Icon`, `Sidebar`, `ScenarioCard`.
- `app-passage.jsx` — `PassageView` (persona monologues) + `PhraseDrawer` (portaled).
- `app-views.jsx` — `TodayView`, `LibraryView`, `SavedView`, `ReviewView`, `UnitCard`.
- `app-main.jsx` — root `App`: routing, tweaks, accent theming, learned/saved state, the lifted global drawer.
- `tweaks-panel.jsx` — in-prototype controls (accent, passage font, show-Chinese toggle). Prototype-only; not part of the product.
