# Authentication Backend

This project is an authentication backend built with Express and Mongoose. It provides functionality for user registration, login, and profile management.

## Features

- User registration and login
- JWT-based authentication
- User profile management
- Middleware for protecting routes

## Technologies Used

- Node.js
- Express
- Mongoose
- MongoDB
- JSON Web Tokens (JWT)

## Project Structure

```
auth-backend
├── src
│   ├── app.js                  # Entry point of the application
│   ├── config
│   │   └── db.js              # Database connection logic
│   ├── controllers
│   │   ├── authController.js   # Authentication-related request handlers
│   │   └── userController.js   # User-related request handlers
│   ├── middlewares
│   │   └── authMiddleware.js    # Middleware for authentication and authorization
│   ├── models
│   │   └── User.js             # User model definition
│   ├── routes
│   │   ├── authRoutes.js       # Authentication routes
│   │   └── userRoutes.js       # User-related routes
│   └── utils
│       └── tokenUtils.js       # Utility functions for JWT
├── package.json                 # NPM configuration file
├── .env                         # Environment variables
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd auth-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret key:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the server:
   ```
   npm start
   ```

## API Usage

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### User Management

- **GET /api/users/profile**: Get the profile of the logged-in user.
- **PUT /api/users/profile**: Update the profile of the logged-in user.

## License

This project is licensed under the MIT License.