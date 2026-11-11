# SpeedOChat - Real-Time WhatsApp Clone 💬⚡

A WhatsApp-inspired real-time messaging application built to deliver instant communication in a simple, responsive, and user-friendly interface. The app is designed for quick room-based conversations, making it ideal for demo projects, team chat prototypes, and lightweight messaging experiences.

## Overview

SpeedOChat provides a smooth chat experience where users can join a conversation instantly using a custom or auto-generated ID. Messages are broadcast in real time, creating a fast and engaging communication flow similar to a lightweight WhatsApp clone.

This project is structured to demonstrate a full-stack JavaScript architecture with a React frontend and an Express + Socket.IO backend.

## Features

- Real-time messaging using Socket.IO
- Instant room creation and join flow
- Optional custom user ID or random generated ID
- Responsive frontend for desktop and mobile screens
- Simple and clean messaging interface inspired by WhatsApp
- Lightweight backend focused on low-latency communication
- Easy local setup and quick deployment workflow

## Tech Stack

- Frontend: React.js, HTML, CSS, Bootstrap
- Backend: Node.js, Express.js
- Real-Time Communication: Socket.IO
- Deployment: GitHub Actions + Heroku (legacy workflow)

## Project Structure

```bash
whatsapp-clone/
├── client/                  # Frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── server/                  # Backend API and socket server
│   ├── index.js
│   ├── package.json
│   └── ...
├── .github/                # CI/CD workflows
├── README.md
├── package.json             # Optional root scripts
└── .gitignore
```

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Node.js 18+
- npm or yarn
- Git

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/ruturaaj16/whatsapp-clone.git
cd whatsapp-clone
```

### 2. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Start the application

Run the backend in one terminal:

```bash
cd server
npm start
```

Run the frontend in another terminal:

```bash
cd client
npm start
```

The frontend should now connect to the backend and allow you to create or join a chat session.

## Environment Variables

If your project uses environment variables, create a `.env` file in the backend and/or frontend as needed.

Example:

```env
PORT=5000
CLIENT_URL=http://localhost:3000
```

## How It Works

1. A user opens the app and enters a name or custom ID.
2. The frontend connects to the backend through Socket.IO.
3. The user joins a chat room or creates a session.
4. Messages are exchanged in real time and broadcast to all connected users in the same room.

## Deployment

This project is designed to be deployable to cloud platforms such as:

- Heroku
- Render
- Vercel (frontend)
- Netlify (frontend)

For production deployment, configure environment variables and ensure both frontend and backend are connected correctly.

## Contributing

Contributions are welcome. If you'd like to improve the app, please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project does not currently declare a license. If you plan to distribute or commercialize it, consider adding an open-source license such as MIT.

## Contact

For questions or suggestions, feel free to reach out via the GitHub repository or project maintainer.

---

Built with love for real-time communication experiences. 🚀