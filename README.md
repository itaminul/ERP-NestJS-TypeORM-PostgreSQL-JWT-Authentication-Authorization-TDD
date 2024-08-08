# ERP using NestJS, TypeORM, PostgreSQL
This project demonstrates how to implement Authentication and Authorization, session-based authentication in a NestJS application using PostgreSQL as the database with TypeOrm. It covers user creation, authentication, and route protection.

## Prerequisites
+ Node.js installed on your system.
+ PostgreSQL installed and running.

## Setup & Installation
1. Install Dependencies: Run `npm install` to install dependencies.
2. Set Up PostgreSQL Database.
3. Configure the database connection .
4. Run `npm run start:dev` to start the server.

## Features
+ User Registration: Allows users to sign up with a username and password.
+ User Authentication: Users can log in with their credentials.
+ Session Management: Utilizes express-session for session management.
+ Route Protection: Protects routes to ensure only authenticated users can access them.

## List of Modules

- Meeting Management System

## Usage
+ Sign Up: Send a POST request to api/user with a username and password.
+ Log In: Send a POST request to api/user/login with the same credentials.
+ Access Protected Route: After logging in, you can access protected routes.


## References
- NestJS Documentation
- PostgreSQL Documentation
- Passport.js Documentation

