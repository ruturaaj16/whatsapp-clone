# SpeedOChat — Real-Time WhatsApp Clone 💬⚡

SpeedOChat is a WhatsApp-inspired messaging app with a React frontend and a Node.js/Express backend. Socket.IO powers real-time communication, while UUIDs are used for user and conversation identifiers.

## Find the frontend and backend

The project code is maintained on separate branches of this repository:

- **[Frontend branch](https://github.com/ruturaaj16/whatsapp-clone/tree/frontend)** — React client application. [View the live frontend demo](https://wsclone-16.netlify.app).
- **[Backend branch](https://github.com/ruturaaj16/whatsapp-clone/tree/backend)** — Node.js, Express, and Socket.IO server.
- **[Main branch](https://github.com/ruturaaj16/whatsapp-clone/tree/main)** — project overview and documentation.

Clone either branch directly:

```bash
git clone --branch frontend https://github.com/ruturaaj16/whatsapp-clone.git whatsapp-clone-frontend
git clone --branch backend https://github.com/ruturaaj16/whatsapp-clone.git whatsapp-clone-backend
```

## Features

- Real-time messaging using Socket.IO
- UUID-based user and conversation identifiers
- React chat interface with responsive styling
- Contacts, conversations, and notification sound support
- Backend support for file uploads

## Tech stack

- **Frontend:** React 16, React Bootstrap, Bootstrap, Socket.IO Client
- **Backend:** Node.js, Express, Socket.IO, Multer

## Run locally

Install Node.js and npm first. Run the frontend and backend in separate terminals.

### Backend

```bash
git clone --branch backend https://github.com/ruturaaj16/whatsapp-clone.git whatsapp-clone-backend
cd whatsapp-clone-backend
npm install
npm start
```

The backend start command runs `node server.js`. Check the backend branch's `server.js` for any environment variables or configuration needed for your setup.

### Frontend

```bash
git clone --branch frontend https://github.com/ruturaaj16/whatsapp-clone.git whatsapp-clone-frontend
cd whatsapp-clone-frontend
npm install
npm start
```

The Create React App development server runs at [http://localhost:3000](http://localhost:3000). To create a production build, run `npm run build` in the frontend directory.

## Deployment

The frontend demo is hosted on Netlify. The backend's previous Heroku deployment is no longer available; to use the app with a live server, deploy the backend separately and configure the frontend to connect to its URL.

## Contributing

Contributions are welcome. Fork the repository, make your changes on a feature branch, and open a pull request.

## License

No license is currently specified in this repository. Please contact the repository owner regarding reuse or distribution.
