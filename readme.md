# Medusa E-commerce Project Aplicada 2024

Docker setup for Medusa e-commerce with backend and storefront.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Create environment files:

```bash
# Backend
cp medusa-backend/.env.example medusa-backend/.env

# Frontend
cp meduse-storefront/.env.example meduse-storefront/.env
```

3. Configure your environment variables in the `.env` files

4. Build and run with Docker:

```bash
docker-compose up --build
```

5. Access the applications:

- Storefront: http://localhost:8000
- Admin Panel: http://localhost:7001
- Backend API: http://localhost:9000

## Development

To run in development mode:

```bash
docker-compose up --build
```

## Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgres://USER:PASSWORD@HOST:5432/DB_NAME
JWT_SECRET=something
COOKIE_SECRET=something
```

### Frontend (.env)

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_API_KEY=your_api_key
REVALIDATE_WINDOW=10
```
