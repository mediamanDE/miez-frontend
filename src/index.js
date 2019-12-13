const Handlebars = require('handlebars');
const text = 'text hallo 123';

const template = require('./components/testing/otherpartial.hbs');
document.getElementById('test').innerHTML = template({text});
