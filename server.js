const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

//Heroku
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express Hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'erick lópez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/data', (req, res) => {
//     res.send('Hola mundo');
// });



app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
});