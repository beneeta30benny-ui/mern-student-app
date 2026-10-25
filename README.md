# Student Management – MERN Stack Project

A simple full-stack app with **M**ongoDB, **E**xpress, **R**eact and **N**ode.js.
Features: add, view, search, edit and delete students (full CRUD).

## Structure
```
mern-student-app/
├── src/      (React app)
├── index.html
├── vite.config.mjs
├── package.json
├── server/   (Node + Express + Mongoose)
│   ├── server.js
│   ├── models/Student.js
│   └── routes/students.js
```

## Prerequisites
- Node.js 18+
- MongoDB running locally (or a MongoDB Atlas connection string)

## Install
```
npm install
```

Set `MONGO_URI` in `server/.env` if you are not using the default local MongoDB
connection (`mongodb://127.0.0.1:27017/studentdb`).

## Development
```
npm run dev
```
Starts Express and Vite together. Open http://localhost:3000; Vite proxies
`/api` requests to Express on port 5000.

## Production
```
npm run build
npm start
```
The build creates `dist/`; Express serves the frontend and API on
http://localhost:5000.

## API Endpoints
| Method | URL                  | Description        |
|--------|----------------------|--------------------|
| POST   | /api/students        | Add a student      |
| GET    | /api/students        | List (?search=)    |
| GET    | /api/students/:id    | Get one student    |
| PUT    | /api/students/:id    | Update a student   |
| DELETE | /api/students/:id    | Delete a student   |

## Adapting to your college question
Change the model in `server/models/Student.js`, the routes file name,
and the form fields in `src/components/StudentForm.jsx`.
