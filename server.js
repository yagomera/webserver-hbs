const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {


    res.render('home.hbs', {
        nombre: 'Yago',
        ano: '2018 y pico'
    });




});


app.get('/about', (req, res) => {


    res.render('about.hbs', {

    });

});




/*
app.get('/data', (req, res) => {


    res.send('Salida en data');
});
*/

app.listen(port, () => {

    console.log('Escuchando peticiones ' + port);
});