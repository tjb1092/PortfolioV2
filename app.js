const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set Bootstrap Folder
app.use('/scripts', express.static(path.join(__dirname, './node_modules/bootstrap/dist/')));


// Home Route
app.get('/', function(req, res){
  res.render('index');
});

let views = require('./routes/views');
app.use('/views', views);

app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
