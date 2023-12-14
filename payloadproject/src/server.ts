import express from 'express';
import payload from 'payload';
import mongoose from 'mongoose';
import cors from 'cors'; // Import cors

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Use cors middleware
app.use(cors());

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3002, () => {
    console.log(`Server is running on port 3000`);
  });
};

start();
