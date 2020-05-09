const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();


//parse app
app.use(bodyParser.urlencoded( {extended}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

//parser application/json
app.use(bodyParser.urlencoded({extended}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log ('Server started on port');
});