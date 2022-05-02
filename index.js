const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//connect database 
const dbURL = `mongodb://localhost:27017/user-collection?readPreference=primary&ssl=false`
mongoose.connect(dbURL,{ useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open' , () => console.log(`Mongo Connected. port 27017`));

app.use('/api',require('./routes'));

app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})
