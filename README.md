# LAB CRUD API
## Project Overview

This project is a simple API for managing students and courses.

## How to Setup

1. **Clone the repository**
   ```sh
   git clone <https://github.com/antoneeeeems/lab_crud_api.git>
   cd lab_crud_api
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure the database**
   - Create a MySQL database (sample: `lab_crud_3isc`).
   - Create the required tables:
     ```sql
     CREATE TABLE `courses` (
       `id` int(11) NOT NULL AUTO_INCREMENT,
       `code` varchar(20) NOT NULL,
       `title` varchar(255) NOT NULL,
       `units` int(11) DEFAULT NULL,
       `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
       PRIMARY KEY (`id`),
       UNIQUE KEY `code` (`code`)
     );

     CREATE TABLE `students` (
       `id` int(11) NOT NULL AUTO_INCREMENT,
       `name` varchar(255) NOT NULL,
       `email` varchar(255) NOT NULL,
       `course` varchar(255) DEFAULT NULL,
       `year_level` int(11) DEFAULT NULL,
       PRIMARY KEY (`id`),
       UNIQUE KEY `email` (`email`)
     );
     ```
   - Update `.env` with your database credentials

4. **Start the server**
   ```
   npm run dev
   ```
   or
   ```
   npm start
   ```

## How to Run

- The server will run on `http://localhost:3000` by default.
- Use tools like [Postman](https://www.postman.com/) to interact with the API.

---

## Postman Dev Environment Setup

Before using the API, set up a Postman environment:

1. Open Postman and go to the **Environments** tab.
2. Click **Add** to create a new environment (e.g., `lab_crud_api_dev`).
3. Add a variable:
  - **Variable:** `baseUrl`
  - **Initial Value:** `http://localhost:3000/api`
  - **Current Value:** `http://localhost:3000/api`
4. Save the environment and select it before making API requests.

You can now use `{{baseUrl}}` in your requests (e.g., `{{baseUrl}}/students`).

---

## API Endpoints

### Health

- `GET {{baseUrl}}/health`  
  Returns API and DB status.

---

### Students

- `GET {{baseUrl}}/students`  
  Get all students.

- `GET {{baseUrl}}/students/:id`  
  Get a student by ID.

- `POST {{baseUrl}}/students`  
  Create a new student.  
  **Body:**  
  ```json
  {
    "name": "Juan Dela Cruz",
    "email": "juan@exmaple.com",
    "course": "BSIT",
    "year_level": 2
  }
  ```

- `PUT {{baseUrl}}/students/:id`  
  Update a student by ID.  
  **Body:**  
  ```json
  {
    "name": "Juan Dela Cruz",
    "course": "BSIT",
    "year_level": 4
  }
  ```

- `DELETE {{baseUrl}}/students/:id`  
  Delete a student by ID.

---

### Courses

- `GET {{baseUrl}}/courses`  
  Get all courses.

- `GET {{baseUrl}}/courses/:id`  
  Get a course by ID.

- `POST {{baseUrl}}/courses`  
  Create a new course.  
  **Body:**  
  ```json
  {
    "code": "CS101",
    "title": "Intro to Computer Science",
    "units": 3
  }
  ```

- `PUT {{baseUrl}}/courses/:id`  
  Update a course by ID.  
  **Body:**  
  ```json
  {
    "code": "CS101",
    "title": "Intro to Computer Science",
    "units": 4
  }
  ```

- `DELETE {{baseUrl}}/courses/:id`  
  Delete a course by ID.

