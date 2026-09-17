# SpendWise

A full-stack personal finance and subscription management application designed to give users real-time visibility into their spending patterns, recurring commitments, and budgetary goals.

---

## Features

- **Authentication & Security**: Secure user registration and login using stateless JWT authentication (access & refresh tokens) and BCrypt password encryption.
- **Expense Tracking**: Full expense management with customizable categories, payment methods, transaction dates, and descriptions.
- **Category Management**: Organize expenses into default and custom categories with personalized color-coding and icons.
- **Budget Tracking & Health**: Set monthly budget thresholds per category with dynamic progress monitoring and spending status alerts (Healthy, Warning, Exceeded).
- **Subscription & Recurring Commitments**: Track active subscriptions, billing cycles, monthly equivalent costs, and upcoming renewal notifications.
- **Financial Analytics & Dashboard**: Comprehensive dashboard featuring:
  - Monthly spending trends and metrics
  - Category breakdown visualizations
  - Recent transactions list
  - Spending insights derived from actual financial activity
- **Theme System**: Dynamic theme engine supporting Light, Dark, and Glass themes with smooth transitions.
- **User Profile & Settings**: Manage user credentials, personal information, and application preferences.
- **Responsive Design**: Modern, responsive user interface built for mobile, tablet, and desktop screens.

---

## Tech Stack

### Backend
- **Java 21**
- **Spring Boot 4.1.0**
- **Spring Security** (Stateless JWT authentication)
- **JSON Web Token (jjwt 0.12.5)**
- **Spring Data JPA & Hibernate**
- **PostgreSQL** (Neon Serverless PostgreSQL)
- **Maven** (with Maven Wrapper)
- **JUnit 5 & Mockito** (Testing)

### Frontend
- **React 19**
- **TypeScript**
- **Vite**
- **Recharts** (Interactive charts and data visualizations)
- **Lucide React** (Modern iconography)
- **Vanilla CSS** (Custom token-based design system)
- **React Router 7** (Client-side routing)

---

## Project Structure

```
SpendWise/
├── .gitignore              # Git ignore rules for Java, Node, secrets, and OS files
├── .env.example            # Environment variable template for backend
├── pom.xml                 # Maven build configuration
├── mvnw / mvnw.cmd         # Maven wrapper scripts
├── start-backend.ps1       # Local backend startup script (PowerShell)
├── start-frontend.ps1      # Local frontend startup script (PowerShell)
├── start-spendwise.ps1     # Unified startup script (PowerShell)
├── src/                    # Spring Boot backend source code
│   ├── main/
│   │   ├── java/com/spendwise/
│   │   │   ├── controller/ # REST API endpoints
│   │   │   ├── dto/        # Request & Response Data Transfer Objects
│   │   │   ├── entity/     # JPA database models
│   │   │   ├── repository/ # Spring Data repositories
│   │   │   ├── security/   # Security configuration, JWT filters, providers
│   │   │   └── service/    # Business logic layer
│   │   └── resources/      # Application properties and SQL schemas
│   └── test/               # Unit, integration, and isolation tests
└── frontend/               # React + TypeScript single-page application
    ├── index.html          # HTML entry point
    ├── package.json        # Dependencies and scripts
    ├── vite.config.ts      # Vite bundler configuration
    ├── tsconfig*.json      # TypeScript configurations
    └── src/
        ├── components/     # UI, dashboard, and shared components
        ├── context/        # Auth and Theme context providers
        ├── layouts/        # AppShell, Sidebar, Navbar
        ├── pages/          # Application views (Dashboard, Expenses, Budgets, etc.)
        ├── services/       # API communication client
        └── types/          # TypeScript interfaces and types
```

---

## Local Setup

### Prerequisites
- **Java Development Kit (JDK) 21** or later
- **Node.js 18+** and **npm**
- **PostgreSQL database** (local instance or cloud database such as [Neon](https://neon.tech))

### 1. Clone the Repository
```bash
git clone https://github.com/Balu-parasa/SpendWise.git
cd SpendWise
```

### 2. Configure Environment Variables
Create a `.env` file in the project root based on `.env.example`:
```bash
cp .env.example .env
```
Fill in your database credentials and a secure secret for JWT signing:
```env
DB_URL=jdbc:postgresql://<host>:5432/<database>?sslmode=require
DB_USERNAME=<your_database_username>
DB_PASSWORD=<your_database_password>
JWT_SECRET=<your_secure_256_bit_random_secret_string>
JWT_ACCESS_EXPIRATION=900000
JWT_REFRESH_EXPIRATION=604800000
PORT=8081
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

Also configure `frontend/.env` if your backend is running on a non-default host:
```bash
cp frontend/.env.example frontend/.env
```
```env
VITE_API_BASE_URL=http://localhost:8081/api
```

### 3. Run the Application

#### Option A: Unified Startup Script (Windows PowerShell)
You can start both backend and frontend simultaneously using the provided startup script:
```powershell
.\start-spendwise.ps1
```

#### Option B: Manual Startup

**Backend:**
```bash
# Using Maven wrapper
.\mvnw.cmd spring-boot:run   # On Windows
./mvnw spring-boot:run        # On macOS/Linux
```
The backend starts at `http://localhost:8081`. Health check available at `http://localhost:8081/api/health`.

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
The frontend starts at `http://localhost:5173`.

---

## Environment Variables

| Variable | Description | Default / Example |
|---|---|---|
| `DB_URL` | JDBC PostgreSQL connection URL | `jdbc:postgresql://...` |
| `DB_USERNAME` | Database username | `postgres` |
| `DB_PASSWORD` | Database password | `secret` |
| `JWT_SECRET` | Secret key for signing HMAC-SHA256 JWT tokens | 256-bit string |
| `JWT_ACCESS_EXPIRATION` | Access token lifespan in milliseconds | `900000` (15 mins) |
| `JWT_REFRESH_EXPIRATION` | Refresh token lifespan in milliseconds | `604800000` (7 days) |
| `PORT` | Backend server port | `8081` |
| `CORS_ALLOWED_ORIGINS` | Comma-separated list of allowed frontend origins | `http://localhost:5173,http://localhost:3000` |
| `VITE_API_BASE_URL` | Frontend API base URL | `http://localhost:8081/api` |

---

## API Overview

The backend REST API is exposed under the `/api` prefix:

- **Auth**: `/api/auth/register`, `/api/auth/login`, `/api/auth/refresh`
- **Health**: `/api/health`
- **Expenses**: `/api/expenses` (CRUD, filtering, date range)
- **Categories**: `/api/categories` (CRUD, user custom categories)
- **Budgets**: `/api/budgets` (CRUD, monthly budget thresholds & status)
- **Subscriptions**: `/api/subscriptions` (CRUD, renewals, billing cycles)
- **Dashboard**: `/api/dashboard/summary`, `/api/dashboard/spending-trend`, `/api/dashboard/category-breakdown`
- **Settings**: `/api/settings` (Profile management, preferences)

---

## Deployment Architecture

The application is structured for independent cloud hosting:
- **Frontend**: Hosted on [Vercel](https://vercel.com) (Single Page Application with client-side routing rewrites)
- **Backend**: Containerized / Java runtime service hosted on [Render](https://render.com) (listening on dynamic `PORT`)
- **Database**: Cloud PostgreSQL hosted on [Neon](https://neon.tech)

- **Project Live Link** : https://spend-wise-five-xi.vercel.app/<br><br>
*(Note: Production deployment is currently being prepared and pending final domain configuration.)*

---

## License

A license decision is pending. Please contact the project maintainer before reproducing or distributing this software.
