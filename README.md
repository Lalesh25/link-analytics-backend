 Link Analytics Backend

This is the backend for the Link Analytics Dashboard Micro-SaaS project. It provides API endpoints for user authentication, URL shortening, click tracking, and analytics using Node.js, Express, and MongoDB.


 🚀 Features

- 🔐 JWT-based Authentication
- 🔗 URL Shortening with optional custom alias
- 📊 Click Tracking with device & location info
- 📅 Link expiration support
- 🧾 Full REST API with protected routes


 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- nanoid for short URLs
- CORS & dotenv for configuration

Auth Routes
POST /api/auth/register – Register user

POST /api/auth/login – Login user

Link Routes (protected)
POST /api/links/create – Create short link

GET /api/links/all – Get user links

Public
GET /r/:shortCode – Redirect to original URL and track click

      --                 To Run

-git clone https://github.com/yourusername/link-analytics-backend.git
cd link-analytics-backend

npm install

for the .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

TO start
-npm run dev


