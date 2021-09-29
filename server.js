require("dotenv/config");
const http = require("http");
const express = require("express");

const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const marked = require("marked");

const multer = require("multer");

const dompurify = createDomPurify(new JSDOM().window);
const app = express();
const server = http.createServer(app);
const check = require("./checkTime").checkTime;

const cors = require("cors");

app.use(
  cors({
    origin: "https://chat-app-169.netlify.app",
  })
);

app.use(express.static(__dirname + "/uploads/"));

const storage = multer.diskStorage({
  destination: `./uploads/`,
  filename: (req, file, cb) => {
    try {
      const fileName = `${Date.now()}${path.extname(file.originalname)}`;
      console.log(fileName);
      cb(null, fileName);
    } catch (err) {
      cb({ error: "Failed To Upload Due To Some Reason" }, file.originalname);
    }
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload-image", upload.single("image"), (req, res) => {
  console.log(req.files);
});

app.get("/", (req, res) => {
  res.send("Server Running Successfully :)");
});

server.listen(process.env.PORT || 8000);

const io = require("socket.io")(server, {
  cors: {
    origin: "https://chat-app-169.netlify.app",
  },
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  console.log(`${id} - Connected`);

  socket.on("send-message", ({ recipients, text, time }) => {
    const checked = check();
    if (checked) {
      const safeText = dompurify.sanitize(marked(text), {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
      });
      recipients.forEach((recipient) => {
        const newRecipients = recipients.filter((r) => r !== recipient);
        newRecipients.push(id);
        socket.broadcast.to(recipient).emit("receive-message", {
          recipients: newRecipients,
          sender: id,
          time,
          text:
            safeText ||
            "Either some malicious code or no message...but you're safe :)",
        });
      });
    }
    if (!checked) {
      recipients.forEach((recipient) => {
        const newRecipients = recipients.filter((r) => r !== recipient);
        newRecipients.push(id);
        socket.broadcast.to(recipient).emit("receive-message", {
          recipients: newRecipients,
          sender: "Creator",
          time,
          text: `Sorry, the message sent by ${id} could not be delivered to you, read about the timings by clicking <a className="bg-secondary text-white" style="color: white !important;" href="https://chat-app-16.herokuapp.com/time">here.</a>`,
        });
      });
    }
  });
});

// Code for just testing timings

// const checkTime = require("./checkTime").checkTime;
// console.log(checkTime());
