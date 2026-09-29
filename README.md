# SpendWise

SpendWise is a full-stack personal finance and subscription management platform built to provide real-time visibility into spending patterns, recurring commitments, and budgetary health.

---



---

## Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Backend** | Java 21, Spring Boot, Spring Security, Spring Data JPA, Hibernate, JJWT |
| **Database** | PostgreSQL (Neon Serverless) |
| **Frontend** | React 19, TypeScript, Vite, Recharts, Lucide React |
| **Testing** | JUnit 5, Mockito |
| **DevOps & Tooling** | Docker, Maven Wrapper, PowerShell scripts |

---

## Project Structure

```text
SpendWise/
├── frontend/                # React + Vite frontend application
├── src/                     # Spring Boot backend source code
├── Dockerfile               # Multi-stage container definition
├── pom.xml                  # Maven dependencies & build configuration
├── start-backend.ps1        # Backend launch script
├── start-frontend.ps1       # Frontend launch script
└── start-spendwise.ps1      # Orchestrated application runner
```

---

## Getting Started

### Prerequisites

* **Java Development Kit (JDK):** Version 21 or later
* **Node.js:** v18 or later (alongside `npm` or `pnpm`)
* **PostgreSQL:** Local instance or cloud database URL (e.g., Neon)
* **Docker:** (Optional) for containerized deployment

### Environment Setup

Create a `.env` file in the root directory by referencing `.env.example`:

```env
# Database
DATABASE_URL=jdbc:postgresql://<HOST>:<PORT>/<DATABASE>
DATABASE_USERNAME=<USERNAME>
DATABASE_PASSWORD=<PASSWORD>

# JWT Configuration
JWT_SECRET=<YOUR_BASE64_SECRET_KEY>
JWT_EXPIRATION_MS=86400000
JWT_REFRESH_EXPIRATION_MS=604800000
```

---

## Running Locally

### Option 1: Using Automated PowerShell Scripts (Windows)

Launch both services simultaneously:
```powershell
.\start-spendwise.ps1
```

Alternatively, run them in separate terminals:
```powershell
# Terminal 1: Backend
.\start-backend.ps1

# Terminal 2: Frontend
.\start-frontend.ps1
```

### Option 2: Manual Setup

**1. Backend**
```bash
# Unix
./mvnw spring-boot:run

# Windows
.\mvnw.cmd spring-boot:run
```
The backend API initializes on `http://localhost:8080`.

**2. Frontend**
```bash
cd frontend
npm install
npm run dev
```
The client dashboard initializes on `http://localhost:5173`.

---

## Container Deployment

Run the complete application stack using Docker:

```bash
# Build the Docker image
docker build -t spendwise:latest .

# Run the container
docker run -p 8080:8080 --env-file .env spendwise:latest
```

---

## Testing

Execute the automated test suite:

```bash
# Backend unit & integration tests
./mvnw test
```
