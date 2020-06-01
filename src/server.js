const express = require("express");
const app = express();
const engine = require('ejs-mate');
const path = require('path');


app.engine('ejs', engine);
app.set('view engine', "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("public", path.join(__dirname, "public"));

//Midlewares
app.use('/', require('./routes/routes'))
require('./routes/routes')
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})