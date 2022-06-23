const express = require('express');
const { engine } = require('express-handlebars');
const {MongoClient} = require('mongodb');


// App
const app = express();
// Add Static file e.g. css

app.use(express.static(__dirname + '/public'));

// Handlebars setup
app.engine('handlebars', engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


// Routes
const reviews = [
    {"title": "Good movie", "movieTitle": 'Inception'},
    {"title": "Wors Movie", "movieTitle": 'Jaws'}
]

app.get('/', (req, res) => {
    res.render('reviews-index', {'reviews': reviews})
})

app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
})
// Misc
app.listen(3000, () => {
    console.log('App is listening on port 3000!');
})