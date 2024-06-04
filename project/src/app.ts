import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import organizationRoutes from './routes/organizationRoutes';
import customerRoutes from './routes/customerRoutes';

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.set('strictQuery', true);  // This replaces useUnifiedTopology and useNewUrlParser
mongoose.connect('mongodb://localhost:27017/database_04').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Routes
app.use('/organizations', organizationRoutes);
app.use('/customers', customerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
