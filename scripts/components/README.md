# @hpe-web/components

HPE Design System web components — Lit-based custom elements that consume `@hpe-web/design-tokens` as CSS custom properties. Framework-agnostic; works in any environment that supports Custom Elements.

Component previews and usage examples are available in Storybook:
https://storybook.supernova.io/design-systems/538616/alias/hpe-web-components/index.html

---

## Install

```bash
npm install @hpe-web/components @hpe-web/design-tokens
```

`@hpe-web/design-tokens` is a required peer dependency. It provides all CSS custom properties that the components reference at runtime.

---

## Setup

Load the base token stylesheet in your app's HTML before any components render. Add optional overrides for dark theme, larger viewports, and locales as needed.

```html
<!-- Required: base tokens (xs–sm viewport, light theme) -->
<link
  rel="stylesheet"
  href="node_modules/@hpe-web/design-tokens/css/tokens.css"
/>

<!-- Optional: dark theme -->
<link
  rel="stylesheet"
  href="node_modules/@hpe-web/design-tokens/css/tokens.dark.css"
/>

<!-- Optional: md–lg and xl viewport overrides -->
<link
  rel="stylesheet"
  href="node_modules/@hpe-web/design-tokens/css/tokens.md-lg.css"
/>
<link
  rel="stylesheet"
  href="node_modules/@hpe-web/design-tokens/css/tokens.xl.css"
/>
```

Dark mode is activated via a `data-theme` attribute:

```html
<body data-theme="dark">
  …
</body>
```

See [`@hpe-web/design-tokens`](../tokens/README.md) for the full token reference.

---

## Usage

### HTML (via CDN or bundler)

Import the package once in your application entry point. All custom elements self-register on import.

```js
import "@hpe-web/components";
```

Then use the elements directly in HTML:

```html
<hpe-button type="primary">Get started</hpe-button>

<hpe-card>
  <hpe-heading slot="heading">Card title</hpe-heading>
  <hpe-paragraph>Card body content goes here.</hpe-paragraph>
</hpe-card>
```

### ES Modules (named imports)

Import only the classes you need. Each import side-effects the custom element registration.

```js
import { HpeButton, HpeCard } from "@hpe-web/components";
```

### Consumer stylesheets

Some components also publish optional consumer-facing stylesheets for teams that want to reuse design-system styling on their own markup.

If you want the full published consumer stylesheet bundle, import:

```css
@import "@hpe-web/components/stylesheets.css";
```

This entrypoint includes all published element and foundation consumer stylesheets.

If you only want one component stylesheet, import its top-level alias:

```css
@import "@hpe-web/components/hpe-button.css";
@import "@hpe-web/components/hpe-section.css";
```

Deep paths are also available when you want them:

```css
@import "@hpe-web/components/elements/hpe-button/hpe-button.css";
@import "@hpe-web/components/foundation/hpe-section/hpe-section.css";
```

Published stylesheets follow a consistent class contract:

- root: `.hpe-component`
- internal elements: `.hpe-component__element`
- modifiers and variants: `.hpe-component--modifier`

See [docs/api/consumer-stylesheets.md](../docs/api/consumer-stylesheets.md) for the full stylesheet reference and class contract catalog.

For `hpe-image`, you can import either of these paths:

```css
@import "@hpe-web/components/hpe-image.css";
/* or */
@import "@hpe-web/components/elements/hpe-image/hpe-image.css";
```

Class contract for `hpe-image.css`:

- `.hpe-image`
- `.hpe-image__container`
- `.hpe-image__media`
- `.hpe-image__fallback`
- aspect ratio modifiers: `.hpe-image--16-9`, `.hpe-image--4-3`, `.hpe-image--1-1`, `.hpe-image--9-16`, `.hpe-image--3-4`, `.hpe-image--18-5`

The stylesheet uses the same token-driven variables as the component implementation, including `--hpe-image-background`.

### React wrappers

React wrapper components are available from `@hpe-web/components/react`.

```jsx
import { HpeButton, HpeCard } from "@hpe-web/components/react";

export function Example() {
  return (
    <HpeCard>
      <HpeButton type="primary" slot="actions">
        Learn more
      </HpeButton>
    </HpeCard>
  );
}
```

If you prefer native custom elements directly in React 19+, importing `@hpe-web/components` and using `hpe-*` tags is still supported.

React event mapping is also available for components that emit custom events:

- `HpeAccordionItem`: `onAccordionItemToggle`
- `HpeAccordion`: `onAccordionItemToggle`
- `HpeCarousel`: `onHpeCarouselChange`
- `HpeForm`: `onHpeFormSubmit`
- `HpeTab`: `onTabSelected`
- `HpeTabGroup`: `onTabSelected`

### Server-side rendering (SSR)

This package includes Lit SSR helpers so you can render HPE components to HTML on the server and hydrate on the client.

Server entrypoint:

```js
import { html, render, collectResultSync } from "@hpe-web/components/ssr";

const result = render(html`
  <hpe-card>
    <hpe-heading slot="heading">SSR title</hpe-heading>
    <hpe-paragraph>Rendered on the server.</hpe-paragraph>
  </hpe-card>
`);

const ssrMarkup = collectResultSync(result);
```

Client hydration entrypoint (import this before component bundles):

```js
import "@hpe-web/components/ssr-client";
import "@hpe-web/components";
```

This follows Lit's SSR guidance for declarative shadow DOM rendering with optional hydration support.

---

## Components

### Elements

Atomic, reusable components.

| Custom element                                                             | Exported class(es)                                                                           | Description                                      |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `hpe-accordion` / `hpe-accordion-item`                                     | `HpeAccordion`, `HpeAccordionItem`                                                           | Collapsible content panels                       |
| `hpe-agenda` / `hpe-agenda-row`                                            | `HpeAgenda`, `HpeAgendaRow`                                                                  | Structured event or schedule listing             |
| `hpe-button`                                                               | `HpeButton`                                                                                  | Action button with type, size, and icon variants |
| `hpe-button-group`                                                         | `HpeButtonGroup`                                                                             | Grouped set of related buttons                   |
| `hpe-card`                                                                 | `HpeCard`                                                                                    | Content card container                           |
| `hpe-carousel`                                                             | `HpeCarousel`                                                                                | Horizontally scrollable item carousel            |
| `hpe-form`                                                                 | `HpeForm`                                                                                    | Form wrapper with layout and validation support  |
| `hpe-horizontal-rule`                                                      | `HpeHorizontalRule`                                                                          | Thematic content divider                         |
| `hpe-image`                                                                | `HpeImage`                                                                                   | Responsive image with caption support            |
| `hpe-input-group`                                                          | `HpeInputGroup`                                                                              | Labeled input + helper text wrapper              |
| `hpe-checkbox` / `hpe-radio` / `hpe-select` / `hpe-input` / `hpe-textarea` | `HpeCheckbox`, `HpeRadio`, `HpeSelect`, `HpeInput`, `HpeTextarea`                            | Form input controls                              |
| `hpe-list` / `hpe-list-item`                                               | `HpeList`, `HpeListItem`                                                                     | Ordered and unordered list                       |
| `hpe-pull-quote`                                                           | `HpePullQuote`                                                                               | Highlighted quotation block                      |
| `hpe-tab-group` / `hpe-tab` / `hpe-tab-panel`                              | `HpeTabGroup`, `HpeTab`, `HpeTabPanel`                                                       | Tabbed content navigation                        |
| `hpe-table`                                                                | `HpeTable`, `HpeTableHeaderRow`, `HpeTableHeaderCell`, `HpeTableBodyRow`, `HpeTableBodyCell` | Data table with semantic row and cell structure  |

### Foundation

Structural layout primitives. Compose these to build page regions and content grids.

| Custom element                                            | Exported class(es)                                  | Description                                                  |
| --------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| `hpe-section`                                             | `HpeSection`                                        | Full-width page section with background and spacing variants |
| `hpe-columns`                                             | `HpeColumns`                                        | Multi-column grid layout                                     |
| `hpe-x-stack` / `hpe-y-stack`                             | `HpeXStack`, `HpeYStack`                            | Horizontal and vertical stack with gap control               |
| `hpe-heading` / `hpe-condensed-heading` / `hpe-paragraph` | `HpeHeading`, `HpeCondensedHeading`, `HpeParagraph` | Typographic text primitives                                  |

### Templates

`templates/` is preserved in the repository for reference and migration support, but template components are deprecated and no longer exported by `@hpe-web/components`.

---

## TypeScript

Type definitions are included. The package exports ESM with `.d.ts` files generated from source.

```ts
import type { HpeButton } from "@hpe-web/components";
```

The Custom Elements Manifest (`dist/custom-elements.json`) is also included for editor tooling and framework integrations that support it.

---

## Requirements

| Requirement              | Minimum                                   |
| ------------------------ | ----------------------------------------- |
| Node.js                  | 18                                        |
| `@hpe-web/design-tokens` | 1.1.0                                     |
| Browsers                 | Evergreen (Chrome, Firefox, Safari, Edge) |

---

## Releases and changelog

Component package releases use git tags in this format:

- `components-vX.Y.Z`

Before creating a new component tag:

1. Update `packages/components/package.json` version.
2. Add a new release section to `packages/components/CHANGELOG.md`.
3. Create the matching tag (`components-vX.Y.Z`) after merge.

Historical and future component release notes are tracked in:
[packages/components/CHANGELOG.md](./CHANGELOG.md)
