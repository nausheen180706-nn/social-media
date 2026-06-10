# Mini Social Media App

A simple social media platform built using:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express.js
- Database: MongoDB

---

## Features

### User Features

- User Registration
- User Login
- User Profile
- Follow Users
- View Followers
- View Following

### Post Features

- Create Post
- View Posts
- Like Posts

### Comment Features

- Add Comment
- View Comments

---

## Project Structure

social-media-app/

├── backend/

│ ├── config/

│ │ └── db.js

│ ├── models/

│ │ ├── User.js

│ │ ├── Post.js

│ │ └── Comment.js

│ ├── routes/

│ │ ├── userRoutes.js

│ │ ├── postRoutes.js

│ │ └── commentRoutes.js

│ ├── server.js

│ ├── .env

│ └── package.json

│

├── frontend/

│ ├── index.html

│ ├── profile.html

│ ├── style.css

│ └── app.js

│

└── README.md

---

## Installation

### Clone Project

```bash
git clone https://github.com/yourusername/social-media-app.git
```

### Backend Setup

```bash
cd backend

npm install
```

### MongoDB

Make sure MongoDB is running:

```bash
mongod
```

### Environment Variables

Create `.env`

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/socialmedia
```

### Start Backend

```bash
node server.js
```

Output:

```bash
MongoDB Connected
Server running on port 5000
```

---

## API Endpoints

### Users

```http
POST /api/users/register
```

```http
GET /api/users
```

```http
PUT /api/users/follow/:id
```

### Posts

```http
POST /api/posts
```

```http
GET /api/posts
```

```http
PUT /api/posts/like/:id
```

### Comments

```http
POST /api/comments
```

```http
GET /api/comments/:postId
```

---

## MongoDB Collections

### Users

```json
{
  "_id": "",
  "username": "",
  "email": "",
  "password": "",
  "bio": "",
  "followers": [],
  "following": []
}
```

### Posts

```json
{
  "_id": "",
  "user": "",
  "content": "",
  "likes": []
}
```

### Comments

```json
{
  "_id": "",
  "post": "",
  "user": "",
  "text": ""
}
```

---

## Future Enhancements

- JWT Authentication
- Password Encryption (bcrypt)
- Image Upload
- Stories
- Reels
- Notifications
- Chat System
- Search Users
- Dark Mode
- Mobile Responsive UI

---

## Author

Developed using HTML, CSS, JavaScript, Express.js and MongoDB.