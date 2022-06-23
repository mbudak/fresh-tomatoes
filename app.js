const express = require('express');
const { engine } = require('express-handlebars');


// App
const app = express();

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

// Misc
app.listen(3000, () => {
    console.log('App is listening on port 3000!');
})