# kaimose

**kaimose** is a backend service framework designed with clarity, modularity, and long-term maintainability in mind.  
It is built using **Node.js**, with optional **Docker** support for reproducible environments and simplified deployment.

---

## Overview

The goal of **kaimose** is to provide a structured foundation for developing backend services following modern engineering standards:
- Clean and testable architecture
- Clear code organization and naming conventions
- Automated build and test pipeline
- Semantic versioning and branching discipline
- Extensible setup ready for future components or integrations

---

## Tech Stack

- **Node.js** (core runtime)
- **Docker** (optional containerization)
- **npm** or **yarn** (package management)
- **GitHub Actions** (CI/CD pipeline)

Planned integrations:
- **TypeScript** for static typing
- **Jest** for testing
- **ESLint + Prettier** for code quality and formatting
- **dotenv** or equivalent configuration management

---

## Project Structure

> The following structure will evolve as the project grows.

```bash
kaimose/
├── src/
│   ├── core/
│   │   ├── registry/
│   │   │   ├── ServiceRegistry.ts        ← Registro global de servicios (HTTP, Kafka…)
│   │   │   ├── ScenarioRegistry.ts       ← Registro de escenarios definidos
│   │   │   └── types.ts                  ← Tipos base compartidos (Service, Scenario, Context)
│   │   │
│   │   ├── engine/
│   │   │   ├── ScenarioEngine.ts         ← Orquesta la ejecución de escenarios
│   │   │   ├── ServiceEngine.ts          ← Maneja la ejecución de cada servicio
│   │   │   └── ResponseBuilder.ts        ← Normaliza las respuestas del engine
│   │   │
│   │   ├── loader/
│   │   │   ├── FileLoader.ts             ← Carga escenarios desde filesystem
│   │   │   └── PluginLoader.ts           ← Carga dinámica de plugins externos
│   │   │
│   │   ├── utils/
│   │   │   ├── Logger.ts                 ← Logger básico (consola)
│   │   │   └── Config.ts                 ← Gestión de configuración (.env)
│   │   │
│   │   └── index.ts                      ← Punto de entrada del core, exporta API pública
│   │
│   ├── services/
│   │   ├── http/
│   │   │   ├── HttpService.ts            ← Ejemplo de servicio (HTTP mock)
│   │   │   └── index.ts                  ← Registro automático del servicio HTTP
│   │   │
│   │   └── index.ts                      ← Re-exporta todos los servicios
│   │
│   ├── scenarios/
│   │   ├── health-check.ts               ← Escenario de ejemplo inicial
│   │   └── index.ts                      ← Registro de escenarios iniciales
│   │
│   ├── cli/
│   │   └── main.ts                       ← CLI inicial (punto de arranque)
│   │
│   └── index.ts                          ← Entry principal del proyecto (server o CLI)
│
├── tests/
│   ├── core/
│   │   ├── registry.test.ts
│   │   ├── scenario.test.ts
│   │   └── engine.test.ts
│   └── example.test.ts
│
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
├── .gitignore
├── Dockerfile
└── README.md
```

---

## Quick Start

Get up and running with **kaimose** in a few steps.

**Requirements**
- Node.js 18.x or higher
- npm (≥ 9.x) or yarn
- Docker (optional, for containerized execution)

**Installation**
1.	Clone the repository

```bash
git clone https://github.com/adrian-castro-vazquez/kaimose.git
cd kaimose
```

2.	Install dependencies

```bash
npm install
```

3.	Run the project

```bash
npm run start
```


You should see:

```
“Kaimose CLI placeholder loaded”.
```

### Run with Docker
Build and run the project inside a Docker container for a consistent environment.

```bash
docker build -t kaimose .
docker run -p 3000:3000 kaimose
```

You should see the same startup message inside the container:  
"Kaimose CLI placeholder loaded".

Additional Information

For full setup details and environment configuration, see the [Project Manual](PROJECT_MANUAL.md).

⸻

````

### Run with Docker
```bash
docker build -t kaimose .
docker run -p 3000:3000 kaimose
```

## Branching Strategy
- **main** → stable production branch
- **dev** → main development branch
- **feature/** → isolated feature branches
- **release/** → pre-release versions
- **hotfix/** → critical fixes for production

Versioning follows the **Semantic Versioning (SemVer)** model:

---

## CI/CD

GitHub Actions are used for continuous integration and delivery.
Each push and pull request triggers:
- Dependency installation
- Lint and test execution
- (Optional) Docker image build

---

## License

Licensed under the MIT License — see LICENSE for details.

---

## Author

Adrián Castro Vázquez --> [GitHub Profile](https://github.com/adrian-castro-vazquez)

