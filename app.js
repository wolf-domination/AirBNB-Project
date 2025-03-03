

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./controllers/routes/authRoutes');
const propertyRoutes = require('./controllers/routes/propertyRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json()); // This parses incoming JSON bodies

// Routes
app.use('/auth', authRoutes);
app.use('/properties', propertyRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
