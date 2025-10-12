# Kaimose Internal Technical Manual

This document serves as an internal reference for all reasoning, decisions, and guiding principles behind the **kaimose** project.
It provides a consolidated record of architectural choices, workflows, and design philosophies to ensure continuity and clarity throughout the project lifecycle.

---

## 1. Project Vision and Philosophy

**kaimose** is designed as a professional-grade backend service, developed with the same rigor expected from production systems.
Although initially built as a personal project, its structure, documentation, and processes follow industry best practices.

Guiding principles:
- Formal and concise communication (no emojis or visual ornaments).
- Maintainability and modularity as core values.
- Documentation as a first-class citizen of the development process.
- Serious and traceable decision-making, even for exploratory work.

---

## 2. Architectural Rationale

The project uses a **modular, layered architecture** based on Node.js.
Each module is self-contained and designed to be testable in isolation.

Reasons for this approach:
- It simplifies maintenance and refactoring.
- It supports future expansion (modules, plugins, CLI tools).
- It avoids monolithic coupling and encourages clarity in code responsibility.
- It aligns well with Node’s asynchronous nature and ecosystem.

The optional use of Docker ensures consistent runtime behavior across development, CI, and production environments.

---

## 3. Tooling and Stack Choices

- **Node.js (v20+)**: mature, performant, widely supported, with strong ecosystem for backend tools.
- **Express or Fastify** (TBD): simple yet flexible HTTP frameworks ideal for modular microservices.
- **Jest/Vitest**: comprehensive testing frameworks with coverage and snapshot support.
- **ESLint + Prettier**: enforces code consistency.
- **GitHub Actions**: built-in, free, and integrated CI/CD environment.
- **Docker**: ensures consistent environments and simplifies portability.

All tools are selected for **stability, simplicity, and ecosystem maturity**.

---

## 4. Version Control Workflow

The project follows a clean two-branch strategy:
- `main`: production-ready, stable code only.
- `dev`: active development branch, merged via PR after CI approval.

Feature development uses short-lived branches:
- `feature/*` — new functionality.
- `fix/*` — bug fixes.
- `chore/*` — maintenance or non-functional updates.

Each commit should be atomic and descriptive.
Releases are tagged manually following **Semantic Versioning (SemVer)**.

---

## 5. Licensing and Legal Aspects

**License:** MIT License

**Rationale:**
- Encourages open use and collaboration while keeping ownership of authorship.
- Simple and permissive, ideal for projects that may evolve into open or hybrid models.
- Compatible with most commercial and open-source dependencies.

All code copyright remains with the project author, **Adrián Castro Vázquez**.

---

## 6. CI/CD Design Choices

- **Platform:** GitHub Actions.
- **Philosophy:** “Every push is verifiable.”
- **Stages:** lint → test → build → (optional) docker → release.
- **Manual control:** releases are intentional, version-tagged, and verified by CI before deployment.

Docker integration ensures parity between local and CI environments, reducing configuration drift.

---

## 7. Development Guidelines

- Code must remain small, composable, and self-explanatory.
- Follow consistent naming patterns and file structure.
- Avoid hidden behavior and implicit dependencies.
- Every new feature must include tests.
- Documentation and code comments should explain *why*, not just *how*.

All decisions affecting architecture or workflow should be logged in ADR files under `DOCS/ADR/`.

---

## 8. Future Considerations

Potential areas for evolution:
- Migration to **TypeScript** for type safety and scalability.
- CLI-based project bootstrap and management tool.
- Automated Docker image publishing.
- Integration of monitoring and observability tools.
- Public API documentation generation.

Each extension must respect the project’s minimal, modular, and testable nature.

---

## 9. Final Notes

This manual serves as a persistent technical memory of **kaimose**.
It is continuously updated as the project evolves, preserving the rationale behind every major decision.

*Maintainer*: Adrián Castro Vázquez*

GitHub: [adrian-castro-vazquez](https://github.com/adrian-castro-vazquez)