const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


app.use(express.static('public'));
app.get('/', (req,res) => res.sendFile(path.join(__dirname, '/views','home.html')));
/* app.get('/contacto', (res,req) => res.sendFile(path.join(__dirname, 'views',',contacto.html'))); */

app.listen(3030, () => console.log('Servidor corriendo en el puerto ' + port));

