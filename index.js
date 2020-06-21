const chalk = require('chalk');
const express = require('express');
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const app = express();

const PORT = 6789;

app.use(express.json());
app.use(express.urlencoded());
app.use( express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({
    extname : '.hbs'
})

var productRoute = require('./routes/Dash.js');

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


// app.get('/product-list', function(req, res){
//     res.render('homepage')
// })
app.post('/product-add', productRoute.add);
app.get('/product-list', productRoute.retrieve);


app.get('/view', productRoute.viewlist);
app.get('/product-page/:id', productRoute.productpage)



app.listen(PORT, function(){
    console.log("application has been started on port:", PORT)
})