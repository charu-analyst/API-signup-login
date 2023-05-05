const express = require('express');

require('./db/dbconnection');
const User = require('./models/userModel');
const app = express();
app.use(express.json());
const userRoute =require('./routes/userRoute')
app.use('/api',userRoute);

app.listen(4000, () => {
    console.log('Servere listening on port....4000!');
});
