const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');

const connectDB = require('./lib/connection/db.connect');
const emplRoutes = require('./lib/routes/employee.routes');

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Rate limiting config
 */
const rateLimiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000, // 1 hour  
  message: "Too many requests from this IP, Please try after some time."
});

app.use(cors());
app.use(rateLimiter);
app.use(express.json({ extended: false }));

/**
 * MongoDB connection
 */
connectDB();

/**
 * Routers registration
 */
app.use('/api/empl', emplRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});