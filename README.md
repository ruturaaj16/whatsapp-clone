# WhatsApp Clone Backend

This branch contains the Node.js backend for the WhatsApp-style chat application. It powers the real-time messaging layer using Socket.IO, serves uploaded media files, and applies basic sanitization before broadcasting messages.

## Overview

The backend is a lightweight Express server with:

- Real-time messaging via Socket.IO
- CORS configuration for the frontend app
- Image upload support with Multer
- Message sanitization using DOMPurify and Marked
- Time-based message delivery restrictions based on the Asia/Colombo timezone

## Project structure

- `server.js` — Express server, Socket.IO event handling, uploads, and message broadcasting
- `checkTime.js` — time restriction helper used to decide if a message should be allowed
- `uploads/` — uploaded files are stored here
- `package.json` — project dependencies and scripts

## Tech stack

- Node.js
- Express
- Socket.IO
- Multer
- CORS
- DOMPurify
- Marked
- Moment Timezone
- dotenv

## Requirements

- Node.js 14+
- npm

## Installation

```bash
npm install
```

## Environment variables

Create a `.env` file in the project root if needed for runtime configuration:

```env
PORT=8000
```

The app also uses a frontend origin configured in `server.js`:

- `https://chat-app-169.netlify.app`

If your frontend is hosted elsewhere, update the CORS and Socket.IO origin settings in `server.js`.

## Running the server

```bash
npm start
```

This starts the server on port `8000` by default.

## API and behavior

### Health check

```http
GET /
```

Returns:

```text
Server Running Successfully :)
```

### Image upload

```http
POST /upload-image
```

Upload a file using the `image` field name. Files are stored in the `uploads/` directory.

### Real-time messaging

The server listens for the `send-message` Socket.IO event and emits `receive-message` to recipients.

Message payload example:

```json
{
  "recipients": ["user-2"],
  "text": "Hello!",
  "time": "2024-01-01T12:00:00Z"
}
```

Before delivery, the message text is sanitized and filtered through a time-check rule defined in `checkTime.js`.

## Notes

- The current implementation enforces a business-hours-like restriction for the Asia/Colombo timezone.
- This branch is intended as the backend service for the frontend chat app and is not a full production-ready auth or database system.
- Uploaded media is stored locally in the `uploads/` directory.

## License

This project uses the ISC license as defined in `package.json`.
