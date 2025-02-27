const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const authenticationRoutes = require('./routes/authenticationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const managerRoutes = require('./routes/managerRoutes');
const technicianRoutes = require('./routes/technicianRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
connectDatabase;

app.use('/auth', authenticationRoutes);
app.use('/admin', adminRoutes);
app.use('/manager', managerRoutes);
app.use('/technician', technicianRoutes);
app.use('/user', userRoutes);

module.exports = app;