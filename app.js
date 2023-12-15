// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./dbaccess');
const config = require('./config');
const promptcontroller = require('./controllers/promptcontroller');

const app = express();

// Connect to MongoDB
connectToDatabase();

app.use(express.json());

app.get('/prompt', promptcontroller.getprompt);
app.get('/prompt/:id', promptcontroller.getpromptbyid);
app.post('/post-prompt', promptcontroller.postprompt);
app.put('/put-prompt/:id', promptcontroller.putprompt);
app.delete('/delete-prompt/:id', promptcontroller.deleteprompt);

// Start the server
app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
});
