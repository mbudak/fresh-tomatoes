const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
// const dbo = require('./db/conn');
require('dotenv').config();


// ENV 
let uri = process.env.ATLAS_URI;

const { engine } = require('express-handlebars');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// App
const app = express();
// Add Static file e.g. css

app.use(express.static(__dirname + '/public'));

// Handlebars setup
app.engine('handlebars', engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const reviews = [
    {"title": "Good movie", "movieTitle": 'Inception'},
    {"title": "Wors Movie", "movieTitle": 'Jaws'}
]
app.get('/', (req, res) => {
    client.connect(err => {
        const collection = client.db("fresh-tomatoes").collection("reviews");
        console.log('collection', collection.find({}));
        // perform actions on the collection object
        client.close();
      });

    res.render('reviews-index', {'reviews': reviews})
    
})

app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
})


// Misc
app.listen(3000, () => {
    console.log('App is listening on port 3000!');
})