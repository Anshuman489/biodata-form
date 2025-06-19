const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const routes = require('./routes');
const errorHandler = require('./errorHandler');

const app = express();

/* ───────── middlewares ───────── */
app.use(cors());
app.use(express.json());

/* ───────── routes ───────── */
app.use('/api/userbiodata', routes);

/* ───────── root ───────── */
app.get('/', (_req, res) => res.send('API is alive'));

/* ───────── error handler ───────── */
app.use(errorHandler);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected to Database successfully");
  app.listen(5000, () => {
  console.log("Server is running on port 5000....");
});
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
})




