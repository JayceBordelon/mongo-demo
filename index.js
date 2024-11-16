const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb'}));

const userRoutes = require('./routes/userRoutes');

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri)
    .then(() => console.info("MongoDB Successfully Connected"))
    .catch(err => console.error(err));


app.use('/user', userRoutes);

app.listen(port, () => {
    console.info(`Server listening on port ${port}`);
})