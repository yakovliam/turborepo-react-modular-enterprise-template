# Turborepo React Bun Modular Enterprise Template

This starter template is a turborepo monorepo with an enterprise modular layout; all set up with Bun.

**Layout breakdown:** This enterprise app is composed of a set of modules, each of which denoted by a label. Each of said modules contains a set of submodules, denoted by a label. Each submodule contains a set of tabs, denoted by label, and contains a component/content.

Here's an example complex app structure that can take advantage of this template:

- Module [Orders]:
  - Submodule [Items]:
    - Tab [Metadata]
    - Tab [Criteria]
    - Tab [Pricing]
  - Submodule [History]:
    - Tab [Graph View]
    - Tab [Extrapolation]
    - Tab [Caluclations]
- Module [User Management]:
  - Submodule [Security]
    - Tab [Passwords]
    - Tab [Audit Log]
    - Tab [Security Dashboard]
  - Submodule [Linking]:
    - Tab (INDEX) [External Links]

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a React app
- `@repo/ui`: a stub React component library shared by `web`. You can define component-specific files for components sitting in this library only.
- `@repo/tailwind-config`: `tailwind` configuration, shared by any libraries that need the globally defined styles.
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo.
- `@repo/module-1`: The first module in the modular layout.
- `@repo/module-2`: The second module in the modular layout.
- `@repo/libs`: The single source of truth for routing, module configuration, types, and hooks.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
bun run build --filter=web
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
