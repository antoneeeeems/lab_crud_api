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

## API Endpoints

### Health

- `GET /api/health`  
  Returns API and DB status.

---

### Students

- `GET /api/students`  
  Get all students.

- `GET /api/students/:id`  
  Get a student by ID.

- `POST /api/students`  
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

- `PUT /api/students/:id`  
  Update a student by ID.  
  **Body:**  
  ```json
  {
    "name": "Juan Dela Cruz",
    "course": "BSIT",
    "year_level": 4
  }
  ```

- `DELETE /api/students/:id`  
  Delete a student by ID.

---

### Courses

- `GET /api/courses`  
  Get all courses.

- `GET /api/courses/:id`  
  Get a course by ID.

- `POST /api/courses`  
  Create a new course.  
  **Body:**  
  ```json
  {
    "code": "CS101",
    "title": "Intro to Computer Science",
    "units": 3
  }
  ```

- `PUT /api/courses/:id`  
  Update a course by ID.  
  **Body:**  
  ```json
  {
    "code": "CS101",
    "title": "Intro to Computer Science",
    "units": 4
  }
  ```

- `DELETE /api/courses/:id`  
  Delete a course by ID.

