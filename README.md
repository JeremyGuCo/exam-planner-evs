# Exam Planner

A simple and modular Angular application to manage exams. 
This project includes a backend built with Node.js and Express, and a frontend built with Angular. The application is containerized using Docker and Docker Compose for easy deployment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Possible Improvements](#possible-improvements)
---

## Installation

### Prerequisites

- Docker and Docker Compose

### Docker

1. Build the Docker images:
   ```bash
   docker-compose build
   ```

2. Start the containers:
   ```bash
   docker-compose up
   ```

3. Access the application:
   - Backend: `http://localhost:3000`
   - Frontend: `http://localhost`

---

## Usage

- **Add an Exam**: Use the "Organiser un examen" button to open the add exam dialog.
- **View Exams**: The list of exams is displayed on the main page.
- **Status**: Exams are color-coded based on their status.

---

## Possible Improvements

### Error Handling and Validation
- **Improvement**: Add more robust error handling for API calls.
- **Why**: Enhances the application's resilience and user experience.
- **Example**: Use HTTP interceptors to centralize error handling.

### Unit and Integration Tests
- **Improvement**: Add unit tests for components, services, and modules.
- **Why**: Ensures code correctness and facilitates maintenance.
- **Example**: Use Jasmine and Karma for unit tests, and Cypress for integration tests.

### Performance Optimization
- **Improvement**: Implement pagination or lazy loading for large lists of exams.
- **Why**: Improves performance, especially with a large number of exams.
- **Example**: Add pagination to the backend and frontend.

### Accessibility
- **Improvement**: Enhance accessibility with ARIA attributes and better color contrast.
- **Why**: Ensures the application is usable by everyone, including those with disabilities.

### Security
- **Improvement**: Strengthen security by adding backend validations and using best practices.
- **Why**: Protects user data and prevents attacks.
- **Example**: Use JWT tokens for authentication and validate user inputs.

---