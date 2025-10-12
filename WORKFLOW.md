# Kaimose Workflow Manual

This document describes the internal workflow, branching strategy, commit standards, release process, CI/CD guidelines, and testing procedures for the **kaimose** project. It is intended as a reference for maintaining consistent and professional development practices.

---

## 1. Branching Strategy

The project uses a simplified Git Flow model suitable for a single developer:

- `main`: Stable, production-ready branch. Only merge here when changes are tested and verified.
- `dev`: Active development branch. All features, fixes, and chores are merged here first.

Additional branch types:
- `feature/<name>`: Implement new functionality or module.
- `fix/<name>`: Bug fixes or corrections.
- `chore/<name>`: Documentation, configuration, or maintenance updates.

Workflow example:
Start a new feature from `dev`, work on it, commit changes, push to remote, and merge back into `dev`. Once `dev` is stable, merge into `main` and tag for release.

Hotfixes:
If a critical issue appears in production (`main`), create a `hotfix/<name>` branch from `main`, apply the fix, merge back into `main` and `dev`, and create a release tag.

---

## 2. Commit Standards

Commits follow the **Conventional Commits** specification:

Format: `<type>(<scope>): <short description>`

Common types:
- `feat` — new feature
- `fix` — bug fix
- `chore` — maintenance or configuration
- `docs` — documentation changes
- `test` — testing-related updates
- `refactor` — code restructuring without behavior change
- `build` — build system or dependencies
- `ci` — continuous integration workflow changes

Example commits:
- feat(core): add HTTP server initialization
- fix(api): correct request validation
- chore(docs): update README
- test(config): add unit tests for environment loader

All commits should be concise, descriptive, and reference the relevant issue or task if applicable.

---

## 3. Versioning and Releases

**Semantic Versioning (SemVer)** is used:

- `MAJOR.MINOR.PATCH`
- `MAJOR`: incompatible API or architecture changes
- `MINOR`: backward-compatible new features
- `PATCH`: backward-compatible bug fixes

Release process:
1. Merge `dev` into `main`.
2. Update version number in `package.json`.
3. Create and push a tag:
```bash
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin vX.Y.Z
```
4. Draft a GitHub release with a summary of changes.

---

## 4. Code Style and Linting

- Follow **ESLint** and **Prettier** rules.
- Maintain consistent naming, modular structure, and readability.
- Avoid dead code, unused dependencies, or console statements in commits to `dev` or `main`.

Run linting before commits: npm run lint

---

## 5. Testing

- Tests are mandatory for new features and critical fixes.
- Planned testing framework: **Jest** or **Vitest**.
- Run all tests before merging into `dev` or `main`: npm test
- Ensure tests cover important functionality and edge cases.

---

## 6. Continuous Integration

- GitHub Actions runs CI on pushes and pull requests to `dev` and `main`.
- CI workflow steps:
  - Dependency installation
  - Lint and test execution
  - Optional Docker image build
- Do not merge into `main` if CI fails.

---

## 7. Documentation

- Each module or feature should be briefly documented.
- `README.md` reflects the current stable state of `main`.
- Maintain professional, technical documentation; avoid unnecessary formatting.

---

## 8. Task Management

- Use GitHub Issues for tasks, bugs, and features.
- Labels: `feature`, `bug`, `chore`, `priority/high`, etc.
- Use GitHub Projects for Kanban-style tracking: `Backlog → In Progress → Review → Done`
- Link commits and PRs to issues by including `#<issue-number>` in messages.

---

## 9. Summary of Daily Workflow

1. Pull latest changes from `dev`.
2. Create a feature/fix/chore branch from `dev`.
3. Implement changes with clear, Conventional Commit messages.
4. Push branch to remote and open a PR to `dev`.
5. Wait for CI to pass and review changes (self-review or notes).
6. Merge branch into `dev` using squash merges.
7. Periodically, when `dev` is stable, merge into `main` and create a release tag.
8. Update project documentation if necessary.

---

## 10. Contact

Maintainer: Adrián Castro Vázquez

GitHub: [adrian-castro-vazquez](https://github.com/adrian-castro-vazquez)

---

*This document serves as the official internal workflow reference for kaimose.*