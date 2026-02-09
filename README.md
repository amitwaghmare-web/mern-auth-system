# MERN Authentication System 🔐

A **full-stack MERN Authentication System** with secure user registration, login,
JWT-based authentication, and protected user profile handling.
Built with a clean and scalable architecture suitable for real-world applications.

---

## 🚀 Features

### Authentication
- User Registration & Login
- Password Hashing using **bcrypt**
- JWT (JSON Web Token) based Authentication
- Secure Token Storage
- Protected Routes (Profile Access)

### Frontend
- Modern React UI
- Login & Register Forms
- Profile Page (Authenticated User Only)
- Form Validation
- Professional UI Styling

### Backend
- RESTful Authentication APIs
- MongoDB User Schema
- Authentication Middleware
- Clean MVC Folder Structure

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS (Custom Styling)

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
- VS Code

---

## 📁 Project Structure

```
mern-auth-system/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── Pages/
│ │ ├── components/
│ │ ├── services/
│ │ ├── styles/
│ │ └── App.jsx
│ ├── index.html
│ └── package.json
│
└── README.md

```
---

## 🔗 API Endpoints

### Register User
**POST** `/api/auth/register`

```json
{
  "name": "Amit",
  "email": "amit@test.com",
  "password": "123456"
}
```

### Login User
**POST**  `/api/auth/login`
```json
{
  "email": "amit@test.com",
  "password": "123456"
}
```

### Get User Profile (Protected)
`GET /api/user/profile`

Headers:
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

### ⚙️ Installation & Setup
1️⃣ Clone Repository

`git clone https://github.com/amitwaghmare-web/mern-auth-system.git`

2️⃣ Backend Setup                     
`cd mern-auth-system/backend`                   
`npm install`

Create .env file:
``` json 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Run backend:

`npm run dev`
3️⃣ Frontend Setup
``` json
cd ../frontend
npm install
npm run dev
```
Frontend runs on:

`http://localhost:5173`

Backend runs on:

`http://localhost:5000`
### 🧪 Testing
Use Postman to test backend APIs

Use browser UI for frontend authentication flow

### 📌 Future Enhancements
Role-based Authentication (Admin/User)

Email Verification

Forgot / Reset Password

Refresh Token Handling

Deployment (Vercel + Render)

### 👨‍💻 Author
Amit Waghmare
MERN Stack Developer

GitHub: https://github.com/amitwaghmare-web

LinkedIn: https://www.linkedin.com/in/amit-waghmare1211/