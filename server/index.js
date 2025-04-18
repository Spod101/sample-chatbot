const express = require('express');
const cors = require('cors');
require('dotenv').config();

const messageRoutes = require('./routes/messages');
const imageRoutes = require("./routes/images");

app.use("/api/images", imageRoutes);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
