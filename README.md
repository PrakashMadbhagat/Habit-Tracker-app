# Habit Tracker API

A backend API for managing user authentication, habit management, and habit tracking using Node.js and MongoDB.

## Features

- **User Authentication**
  - JWT-based authentication for secure login and registration.
  
- **Habit Management**
  - CRUD endpoints for habits (Create, Read, Update, Delete).
  - Stores user habit data, including streaks, daily progress, and frequency settings.
  
- **Reminders & Notifications**
  - Daily notification scheduler to remind users of pending habits.

- **Admin Controls**
  - Admin users can view all users and their habit completion statistics.
  - Ability for admins to create habit templates for users.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- cron for scheduling reminders

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)
- Postman or any other API client for testing

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Log in a user.

### Habit Management

- `GET /habits` - Get all habits for the authenticated user.
- `POST /habits` - Create a new habit.
- `PUT /habits/:id` - Update an existing habit.
- `DELETE /habits/:id` - Delete a habit.

### Admin Controls

- `GET /admin/users` - View all users and their habit stats.
- `POST /admin/habit-templates` - Create a new habit template.
