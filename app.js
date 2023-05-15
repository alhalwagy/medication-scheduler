const express = require('express');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const userRoute = require('./routes/userRoute');
const medicineRoute = require('./routes/medicineRoute');
// const medicineRoute = require('./routes/medicineRoute');
const notesRoute = require('./routes/notesRoute');

//Start express app
const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoute);
app.use('/api/v1/medicines', medicineRoute);
app.use('/api/v1/notes', notesRoute);

app.use(globalErrorHandler);
module.exports = app;
