# Changelog

All notable changes to `@hpe-web/components` are documented here.

---

## [Unreleased]

### Added

- Initial package changelog for `@hpe-web/components` at `packages/components/CHANGELOG.md`.
- Release-note structure for upcoming component tags, including an `Unreleased` staging section.

### Changed

- `packages/components/README.md` now documents the component tag format (`components-vX.Y.Z`) and a pre-tag checklist (version bump, changelog entry, tag creation).
- Root `README.md` package table now reflects current published versions (`@hpe-web/design-tokens` `2.0.1`, `@hpe-web/components` `1.3.1`).

### Release prep

- `packages/components/package.json` version bumped from `1.3.0` to `1.3.1`.

### Notes

- This `Unreleased` entry is documentation-only and does not change component runtime behavior.

---

## [1.3.0] - 2026-07-15

### Added

- Lit SSR support entrypoints for server rendering and client hydration.
- React wrapper entrypoint for component consumption from React apps.
- React wrapper event mapping for bubbled custom events.

### Changed

- Repository docs now include React and SSR entrypoint usage guidance.

### CI and release

- Added and hardened Code Connect sync/check workflows.
- Tagged release: `components-v1.3.0`.

## [1.2.1] - 2026-07-13

### Added

- `hpe-button` slotted icon support.
- Storybook preview links in README docs.

### Fixed

- Replaced non-existent heading default tokens with medium variants in components using heading tokens.

### CI and release

- Tagged release: `components-v1.2.1`.

## [1.2.0] - 2026-07-13

### Added

- Button API update to split left and right icon controls.

### Changed

- Package metadata alignment and repo-wide package standards cleanup.
- Publish workflow architecture split into reusable package-specific flows.

### Fixed

- Publish pipeline reliability improvements, including npm auth/token validation and YAML/workflow corrections.
- Node/npm compatibility alignment in publish workflows.

### CI and release

- Supernova Storybook import workflow and supporting config/scripts/docs were added in this interval.
- Tagged release: `components-v1.2.0`.

## [1.1.0] - 2026-07-09

### Added

- Initial npm-focused package README for `@hpe-web/components`.

### Changed

- Template components were deprecated from package exports.
- Barrel exports were reorganized by category/folder for cleaner package structure.
- Monorepo package naming and package descriptions were standardized under `@hpe-web/*`.

### Fixed

- Publish workflow hardening for stable Node/npm combinations and install reliability.

### CI and release

- Tagged release: `components-v1.1.0`.

## [1.0.0] - 2026-07-08

### Added

- First stable `@hpe-web/components` release line.

### Fixed

- Component package build and export baseline as captured by the release branch that produced `components-v1.0.0`.

### CI and release

- Tagged release: `components-v1.0.0`.
