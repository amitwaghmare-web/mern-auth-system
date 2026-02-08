# MERN Authentication System 🔐

A secure and scalable authentication system built using the MERN stack.
This project demonstrates user registration, login, password hashing,
and JWT-based authentication with a clean backend architecture.

---

## 🚀 Features
- User Registration & Login
- Password Hashing using bcrypt
- JWT (JSON Web Token) Authentication
- Protected Routes
- MongoDB User Schema
- Clean MVC Folder Structure
- RESTful API

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

### Tools
- Git & GitHub
- Postman
- Nodemon

---

## 📁 Project Structure

backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── server.js
 └── .env

---

## 🔗 API Endpoints

### Register User
POST `/api/auth/register`

Request Body:
```json
{
  "name": "Amit",
  "email": "amit@test.com",
  "password": "123456"
}
```


Login User

POST `/api/auth/login`

Request Body:
```json
{
  "email": "amit@test.com",
  "password": "123456"
}
```


## ⚙️ Installation & Setup

Clone the repository

`git clone https://github.com/amitwaghmare-web/mern-auth-system.git`


Navigate to backend folder

`cd mern-auth-system/backend`


Install dependencies

`npm install`


Create .env file

```json 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key 
```


Run the server

npm run dev

🧪 Testing

Use Postman to test authentication APIs.

📌 Future Enhancements

JWT middleware & protected routes

Role-based authentication

React frontend integration

Email verification

Password reset functionality

👨‍💻 Author

Amit Waghmare
MERN Stack Developer

GitHub: https://github.com/amitwaghmare-web

LinkedIn: https://www.linkedin.com/in/amit-waghmare1211/