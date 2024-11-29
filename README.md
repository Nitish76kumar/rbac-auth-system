
# Role-Based Access Control (RBAC) System

This project implements a secure Role-Based Access Control (RBAC) system using **Node.js**, **Express**, and **MongoDB**. It includes features for authentication, authorization, and role management, ensuring secure access to resources based on user roles.

## Features

- **Authentication**: Users can register, log in, and log out securely.
- **Authorization**: Access to resources is determined based on user roles (e.g., Admin, Moderator, User).
- **JWT Tokens**: Securely manage user sessions using JSON Web Tokens (JWT).
- **Profile Management**: Users can view and update their profile. Admins and Moderators can access other users' profiles.
- **Role-Based Access**: Only authorized users can access specific endpoints based on their roles.
- **Scalable Code**: Designed with modularity and scalability in mind.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)
- **Postman/Thunder Client** (for API testing)
- **Git** (optional)

---

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/Nitish76kumar/rbac-auth-system.git
cd rbac-auth-system
```

### 2. Install Dependencies
Install the required Node.js packages:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the project root and configure the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Server
Run the server:
```bash
npm start
```

Or use **nodemon** for development:
```bash
npm run dev
```

### 5. Test the Endpoints
Use Postman, Thunder Client, or any API testing tool to test the endpoints.

---

## API Endpoints

### **Authentication Routes**
| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Log in and get a token      |

**Example Login Response:**
```json
{
  "token": "your_jwt_token_here"
}
```

### **Profile Routes**
| Method | Endpoint          | Description                             | Roles Allowed         |
|--------|-------------------|-----------------------------------------|-----------------------|
| GET    | `/api/profile`     | View current user's profile             | Admin, Moderator, User |
| GET    | `/api/profile/:userId` | View any user's profile (Admin only)  | Admin                 |
| PUT    | `/api/profile`     | Update current user's profile           | Admin, Moderator, User |

**Headers for Protected Routes:**
Add the token in the `Authorization` header:
```
Authorization: Bearer <your_token_here>
```

---

## Directory Structure

```
rbac-auth-system/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── profileController.js # Profile management logic
├── middleware/
│   └── protect.js         # Authorization middleware
├── models/
│   └── User.js            # User model
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   ├── profileRoutes.js   # Profile routes
├── .env                   # Environment variables
├── server.js              # Main server file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## How It Works

1. **Register a User**:
   - Endpoint: `/api/auth/register`
   - Body:
     ```json
     {
       "name": "Nitish",
       "email": "nitish@example.com",
       "password": "password123",
       "role": "User"
     }
     ```

2. **Login to Get Token**:
   - Endpoint: `/api/auth/login`
   - Body:
     ```json
     {
       "email": "nitish@example.com",
       "password": "password123"
     }
     ```

3. **Access Protected Routes**:
   - Add the token to the `Authorization` header:
     ```
     Authorization: Bearer <your_token>
     ```

4. **Role-Based Access**:
   - Routes and their access are determined by the `role` assigned to the user. For example:
     - Admins can view and update any user's profile.
     - Users can only view and update their own profile.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Middleware**: Express middleware for request parsing and authentication

---

## Example User Roles

- **Admin**:
  - Full access to all routes.
  - Can view and update any user's profile.
- **Moderator**:
  - Can view and update their own profile.
- **User**:
  - Limited to their own profile.

---

## Troubleshooting

### Common Issues
1. **Token Not Valid**
   - Ensure you include the token in the `Authorization` header.
   - Make sure the token has not expired.

2. **User Not Found**
   - Verify the `userId` is correctly attached to the request in the `protect` middleware.

3. **MongoDB Connection Error**
   - Ensure your `MONGO_URI` in the `.env` file is correct.
   - Check if MongoDB is running locally or your cloud database is accessible.

---

## Future Improvements

- Add password reset functionality.
- Implement email verification during registration.
- Enhance logging and error handling.
- Add rate limiting to protect against brute-force attacks.

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
