# MERN Notes Management Application

## Student Details

| Field | Details |
|---|---|
| **Name** | Tarishi Hemani |
| **Roll No.** | 2026201044 |
| **Course** | MERN Stack Lab |
| **Lab** | Notes Management CRUD Application |

## GitHub Repository

https://github.com/tar-i-shi/notes-app.git

## Project Description

A full-stack Notes Management application built using the MERN stack.

### Technologies Used

- MongoDB
- Mongoose
- Express.js
- React
- Node.js
- Axios
- Vite

## Features

- Create a new note
- View all notes
- Delete notes
- Notes sorted by creation time
- Loading state
- Empty state
- RESTful backend API
- MongoDB persistence
- React state synchronization without page refresh
- CORS-enabled client-server communication

## Project Structure

```text
notes-app/
├── .gitignore
├── README.md
├── screenshots/
│   ├── ui-preview.png
│   └── delete-action.png
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── package.json
│   └── server.js
└── client/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── index.css
```

## Database

MongoDB is expected to run locally.

**Connection string:**

```text
mongodb://localhost:27017/notes_db
```

## Getting Started

### 1. Backend Setup

```bash
cd server
npm install
npm start
```

The backend runs on: `http://localhost:5000`

### 2. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs on: `http://localhost:5173`

Then open your browser at `http://localhost:5173`.

## REST API Reference

### Create Note

```text
POST /api/notes
```

**Request body:**

```json
{
    "title": "My Note",
    "content": "This is my note."
}
```

**Response:** `201 Created`

### Get Notes

```text
GET /api/notes
```

Returns all notes, sorted by `createdAt` in descending order.

### Delete Note

```text
DELETE /api/notes/:id
```

| Condition | Response |
|---|---|
| Note deleted successfully | `200 OK` |
| Note does not exist | `404 Not Found` |

## Mongoose Schema

| Field | Type | Constraints |
|---|---|---|
| `title` | String | required |
| `content` | String | required |
| `createdAt` | Date | default: `Date.now` |

## Testing

The API was tested using curl/Postman.

The frontend was tested by:

1. Creating notes.
2. Displaying multiple notes.
3. Refreshing the page and verifying persistence.
4. Deleting a note.
5. Verifying that the note disappears without a browser refresh.
6. Verifying the successful DELETE request in the browser Network tab.

## Screenshots

### UI Preview

`screenshots/ui-preview.png`

Shows at least two notes rendered in the browser.

### Delete Action

`screenshots/delete-action.png`

Shows the application after deleting a note, along with the successful DELETE request in the browser DevTools Network tab.

## Run Commands (Quick Reference)

**Terminal 1 — Backend**

```bash
cd server
npm install
npm start
```

**Terminal 2 — Frontend**

```bash
cd client
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```
