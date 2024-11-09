const express = require('express');
const { times } = require('lodash');
const mongoose = require('mongoose');

const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const db = "mongodb+srv://bloger:CHARAN123qwe%40@cluster0.55mwu.mongodb.net/node?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(db)
    .then((request) => {
        app.listen(3000);
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('mongodb connection',err)
    })
    

app.set('view engine','ejs');
app.set('views','docs')

app.get('/', (req,res) => {
    res.redirect('/blogs')
})
app.get('/about', (req,res) => {
    res.render('about',{title:'About page'});
})
app.use('/blogs',blogRoutes)

app.use((req,res) => {
    res.render('404',{title:'404'});
})    








