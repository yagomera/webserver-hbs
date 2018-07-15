const hbs = require('hbs');
//helpers
hbs.registerHelper('getAnio', () => {

    return new Date();
})

hbs.registerHelper('capitalizar', (texto) => {


    return texto + 'dd';
})