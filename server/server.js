const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//app
const app = express();


//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
})
.then(()=> console.log("DB CONNECTED"))
.catch(err => console.log('DB CONNECTION ERR! ', err));

//midleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());


//routes
app.get('/api', (req,res) => {
    res.json({
        data: "Hey you hit Node API"
    })
});

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));