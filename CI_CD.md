# Kaimose CI/CD Guide

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) strategy for the **kaimose** project.
The goal is to ensure consistent, automated, and verifiable workflows from code commit to release delivery.

---

## 1. Overview

The project uses **GitHub Actions** as its CI/CD platform.
Every push and pull request to the `dev` and `main` branches triggers automated workflows that include linting, testing, building, and optional Docker image creation.

The pipeline is designed to:
- Enforce code quality and testing before merging.
- Ensure reproducible builds across environments.
- Simplify release management via Git tags and automated releases.

---

## 2. Workflow Structure

The main workflow file is stored at:

```
.github/workflows/ci.yml
```

This file defines the automation pipeline for the repository.
It is automatically triggered by:
- Pushes or pull requests to `dev` or `main`
- Manual dispatch from the GitHub Actions interface

---

## 3. Pipeline Stages

Each workflow run follows the same high-level structure:

1. **Checkout and Setup** — retrieve the latest repository code and install dependencies using a clean `npm ci` install.
2. **Linting** — run static analysis using `ESLint` and `Prettier`; fail the build if errors are found.
3. **Testing** — execute all unit and integration tests with `Jest` or `Vitest`; generate coverage reports.
4. **Build** — ensure the compiled output is consistent and error-free.
5. **Docker (Optional)** — build and validate a Docker image tagged with the commit hash or release version.
6. **Release (Manual)** — merging `dev` into `main` triggers the release process manually, including version tagging and optional image publishing.

---

## 4. Versioning and Release Workflow

Releases are managed manually to maintain full control over the version lifecycle.

Release steps:
1. Confirm `dev` is stable and all CI checks pass.
2. Merge `dev` into `main`.
3. Update version in `package.json`.
4. Create and push a Git tag (`vX.Y.Z`).
5. Optionally trigger a release workflow that:
 - Builds and pushes a Docker image.
 - Publishes release notes automatically on GitHub.

Version format follows **Semantic Versioning (SemVer)**:

```batch
MAJOR.MINOR.PATCH
```

---

## 5. Environment Variables

Sensitive values are handled securely via **GitHub Secrets**, injected at runtime by the CI workflow.

Common examples:
- `NODE_ENV` — build environment
- `DOCKERHUB_USERNAME` / `DOCKERHUB_TOKEN` — for Docker image publishing
- `CUSTOM_ENV_*` — any additional runtime configuration

No secrets are stored in the repository.

---

## 6. Docker Integration

The CI pipeline optionally includes Docker support for consistency across environments.

Goals:
- Ensure each build produces a reproducible container.
- Simplify local testing and deployment.
- Validate that Docker builds succeed as part of CI.

In production or future stages, the same approach can be used to publish images to Docker Hub or GitHub Container Registry.

---

## 7. Deployment (Future Scope)

Currently, **kaimose** does not include automatic deployment.
Future versions may support:
- Automated Docker image pushes after release.
- Deployment to cloud environments (AWS, GCP, Azure).
- Environment-based deployment pipelines (`staging`, `production`).

Each addition will preserve the same CI/CD principles:
- Full automation
- Environment reproducibility
- Rollback capability

---

## 8. Status Checks and Branch Protection

GitHub branch protection rules are configured as follows:
- All PRs to `main` and `dev` must pass CI checks before merge.
- Linear history is enforced (squash merges recommended).
- Direct pushes to `main` are disallowed.

This ensures every change to the main branches has been validated by the pipeline.

---

## 9. Local Validation

Developers can replicate the CI checks locally to ensure consistency:

- `npm run lint` — run linting rules
- `npm test` — run all test suites
- `npm run build` — ensure successful build
- `docker build -t kaimose .` — validate container integrity

Maintaining identical local and CI results avoids environment drift and improves reliability.

---

## 10. CI/CD Principles

The kaimose CI/CD approach is guided by the following principles:

1. Automation over manual processes.
2. Verification before integration.
3. Consistency across all environments.
4. Transparency and traceability of every release.
5. Reproducibility through containerization.

---

## 11. Summary

The CI/CD system ensures that every change in **kaimose** is tested, verified, and reproducible before reaching production branches.
Through GitHub Actions and Docker integration, the project maintains a fully automated workflow aligned with professional software engineering practices.

*This document serves as the official CI/CD reference for kaimose.*