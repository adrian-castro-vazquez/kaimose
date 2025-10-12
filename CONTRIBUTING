# Contributing Guidelines

This document describes the contribution standards and development workflow for **kaimose**.

Although this project is primarily maintained by a single developer, it follows a professional workflow to ensure long-term consistency, reproducibility, and maintainability.

---

## 1. Branching Model

**kaimose** uses a two-tier branch structure inspired by *Git Flow*, simplified for single-developer projects.

| Branch | Purpose |
|--------|---------|
| `main` | Stable, production-ready branch. Contains verified and released code. |
| `dev`  | Active development branch. All features and changes originate here. |

Additional branch types:
- `feature/<name>` — new functionality or module.
- `fix/<name>` — bug fixes or technical corrections.
- `chore/<name>` — configuration, documentation, or maintenance updates.

### Example workflow

```bash
# Start a new feature
git checkout dev
git checkout -b feature/config-loader

# After completing the feature
git commit -m "feat(config): implement configuration loader"
git push origin feature/config-loader

# Merge back into dev
git checkout dev
git merge --squash feature/config-loader
git push origin dev
```

When dev reaches a stable, tested state, it is merged into *main* and tagged for release.

---

## 2. Commit Standards

Commits should follow the **Conventional Commits** specification to maintain clarity and consistency:

```bash
<type>(<scope>): <short description>
```

**Examples**:
- `feat(core)`: add HTTP server initialization
- `fix(api)`: correct request validation
- `chore(docs)`: README.md
- `test(config)`: add unit tests for environment loader

Common commit types:
- `feat` — new feature
- `fix` — bug fix
- `chore` — maintenance or configuration change
- `docs` — documentation changes
- `test` — testing-related updates
- `refactor` — code restructuring without behavior change
- `build` — build system or dependencies
- `ci` — continuous integration or workflow changes

---

## 3. Versioning and Releases

Releases follow the Semantic Versioning (SemVer) standard:

```batch
MAJOR.MINOR.PATCH
```

| Type    | Description |
|---------|-------------|
| `MAJOR` | Incompatible API or architecture changes. |
| `MINOR` | Backward-compatible functionality additions. |
| `PATCH` | Backward-compatible bug fixes or small changes. |

**Creating a release**

1.	Merge the latest changes from `dev` into `main`.
2.	Update version number in `package.json` (if applicable).
3.	Create a tag:

```bash
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

4. Draft a release in GitHub, summarizing changes.

---

## 4. Code Style and Linting

- Follow **ESLint** and **Prettier** rules (to be defined in `.eslintrc` and `.prettierrc`).
- Maintain consistent naming conventions and modular structure.
- Avoid unused dependencies, dead code, or console statements in commits to `dev` or `main`.

Run *linting* before commits:

```bash
npm run lint
```

---

## 5. Testing

Tests are mandatory for new features and critical changes once the test suite is established.

Planned testing framework: **Jest** or **Vitest**.

Run all tests before merging to `dev` or `main`:

```bash
npm test
```

---

## 6. Continuous Integration

GitHub Actions automatically runs the CI pipeline for all pushes and pull requests targeting `dev` or `main`.
The CI workflow includes:
- Dependency installation
- Lint and test execution
- Optional Docker image build

No code should be merged into `main` if CI fails.

---

## 7. Documentation
- Each module or feature should be briefly documented.
- The ``README.md`` should always reflect the current state of main.
- Avoid unnecessary formatting — documentation must remain professional and technical.

---

## 8. Contact

- Project Manager: Adrián Castro Vázquez
- GitHub: [adrian-castro-vazquez](https://github.com/adrian-castro-vazquez)

---

*Following these guidelines ensures that kaimose remains clean, consistent, and maintainable over time*.