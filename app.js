// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './.env.local' });

const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
// get MongoDB driver connection
const dbo = require('./db/conn');
const cors = require('cors');


const PORT = process.env.PORT || 3000;


// ENV 
let uri = process.env.ATLAS_URI;

const { engine } = require('express-handlebars');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const path = require('path')
// App
const app = express();

// Bootstrap
/*
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
*/

app.use(cors());
app.use(express.json());

// Add Static file e.g. css
app.use(express.static(__dirname + '/public'));

// middle-wares
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// Handlebars setup
app.engine('handlebars', engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const reviews = [
    {"title": "Good movie", "movieTitle": 'Inception'},
    {"title": "Wors Movie", "movieTitle": 'Jaws'}
]
app.get('/', (req, res) => {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection('reviews')
      .find({})
      .limit(100)
      .toArray(function (err, result) {
        if (err) {
            res.render('reviews-index', {'reviews': []});
        }
        res.render('reviews-index', {'reviews': result})    
      });
})

app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
})

app.post('/reviews/new', (req, res) => {
  console.log('post here', req, res);
})

dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  });