const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const router = require('./Router/router')
const port = process.env.port || 3300;
const user = require('./Router/user')

mongoose.connect('mongodb://localhost/product')
const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err)
});
db.once('open', ()=>{
    console.log('Database connection successfully')
})


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('dev'))

app.use('/api', router)
app.use('/', user)


app.get('/', (req,res)=>{
    res.send('<h1>I am backend</h1>')
})



app.listen(port ,()=>{
    console.log(`server is running at  http://localhost:${port}`)
});