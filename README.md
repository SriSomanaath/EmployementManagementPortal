# Employee Management System

## Frontend: Employee Management UI

This project contains a React component designed for managing employee data. It provides functionalities for viewing and editing employee information, including sorting by different columns.

### Features

- Fetches employee data from an API endpoint
- Allows users to edit minimum and maximum time for each employee
- Supports sorting by email, first name, and last name
- Provides a user-friendly interface for managing employee data

### Installation and Setup

To properly install and run the frontend, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <frontend_repository_url>
    ```

2. **Install dependencies:**

    ```bash
    cd employee-management-system/frontend
    npm install
    # or
    yarn install
    ```

3. **Update the API endpoint URL in the `useEffect` hook of `HeroSection.js` to point to your server.**

4. **Run the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

5. **Open your browser and navigate to view the application as per your localhost port url.**

## Backend: Employee Management System

This project is a simple Employee Management System implemented in Node.js using the Express framework. It provides endpoints to retrieve employee data and update their minimum and maximum working hours.

### Installation and Setup

To properly install and run the backend, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <backend_repository_url>
    ```

2. **Install dependencies:**

    ```bash
    cd employee-management-system/backend
    npm install
    # or
    yarn start
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

### Usage

- **Retrieve Employee Data:** Send a GET request to `/api/employees` to retrieve all employee data.
- **Update MinTimeInHours:** Send a PUT request to `/api/employees/min-time` with the employee's email and the new minimum time in hours.
- **Update MaxTimeInHours:** Send a PUT request to `/api/employees/max-time` with the employee's email and the new maximum time in hours.

### Configuration

- The server listens on port 3000 by default. You can change the port by setting the `PORT` environment variable.
- Employee data is stored in a YAML file named `data.yaml`.

### Dependencies

- Express.js: Web framework for Node.js
- js-yaml: YAML parser and serializer for JavaScript

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
