require('dotenv').config();

const express = require('express');
const connectDB = require('./src/db');

// const postRoutes = require('./src/routes/post.routes');

const app = express();

app.use(express.json());

connectDB();

// app.use('/post', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
