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
