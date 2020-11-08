const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Connect the database
connectDB();

app.use(express.json({ extended: false }));

// Middleware
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/cases', require('./server/routes/api/cases'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));