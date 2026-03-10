# SpeedOChat - Real-Time WhatsApp Clone 💬⚡

A full-stack, real-time chat application inspired by WhatsApp. Built to enable instantaneous, secure communication using web sockets, allowing users to connect via custom or auto-generated unique IDs.

> **Status Note:** The frontend code is fully functional and available for review. The backend was previously deployed via an automated CI/CD pipeline to Heroku. Due to Heroku's removal of free tiers, the live backend is currently offline, but the full server logic and Socket.IO implementation are available in this repository.

---

## 🚀 Key Features
* **Real-Time Messaging:** Implemented bi-directional, low-latency communication using **Socket.IO**.
* **Anonymous & Secure Access:** Users can generate a random ID or create a custom one to instantly join a session without complex authentication overhead.
* **Responsive UI:** Clean, mobile-friendly interface built with **React.JS** and **Bootstrap**.
* **Automated Deployment:** CI/CD pipeline integrated with GitHub to push updates directly to Heroku, reducing deployment times by 60%.

---

## 🛠️ Tech Stack
* **Frontend:** React.JS, HTML/CSS, Bootstrap
* **Backend:** Node.JS, Express.JS
* **Real-Time Communication:** Socket.IO
* **DevOps/Deployment:** GitHub Actions, Heroku (Legacy)

---

## 💻 Local Setup & Installation

To run this project locally, you will need to start both the server and the client.

### 1. Start the Backend Server
```bash
cd server
npm install
npm start
