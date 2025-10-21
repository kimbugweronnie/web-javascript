# Employee & Task Management CRUD Application

## Overview
This is a Vue.js-based CRUD application for managing employees and their work tasks. The application utilizes:

- **Vue.js** as the frontend framework
- **Tailwind CSS** for styling
- **Vue Router** for navigation
- **Pinia** for state management
- **Axios** for API requests
- **Vitest** for unit testing
- **Cypress** for end-to-end (E2E) testing
- **Docker** for containerization

## Features
- Add, edit, delete, and list employees
- Add, edit, delete, and list work tasks
- Assign tasks to employees
- Filter tasks by employee
- Unit testing with Vitest
- E2E testing with Cypress

## Project Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 18)
- npm or yarn
- Docker (optional for containerization)

### Installation
Clone the repository:
```sh
git clone https://github.com/yourusername/vue-crud-employee-tasks.git
cd vue-crud-employee-tasks
```

Install dependencies:
```sh
npm install
```

### Running the Development Server
```sh
npm run dev
```
The application will be available at `http://localhost:5173`.

### Running Unit Tests
```sh
npm run test:unit
```

### Running E2E Tests
```sh
npm run test:e2e
```

### Docker Setup
Build and run the container:
```sh
docker build -t vue-crud-app .
docker run -p 8080:80 vue-crud-app
```
The app will be accessible at `http://localhost:8080`.

```

## API Endpoints
This project assumes a backend API with the following endpoints:

### Employees
- `GET /api/employees` - Fetch all employees
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/:id` - Update an employee
- `DELETE /api/employees/:id` - Delete an employee

### Tasks
- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
Developed by Ronnie Kimbugwe
