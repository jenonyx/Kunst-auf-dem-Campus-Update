const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Define the navigation links:
const navLinks = {
    home: '/',
    map: '/map',
    visualizations: '/visualizations',
    about: '/about',
    quellen: '/quellen'
};
  

// Routes:
app.get('/', (req, res) => {
    let activePage = 'home';
    res.render('home', { navLinks, activePage }); // Pass the navigation links to the EJS template
});

app.get('/map', (req, res) => {
    let activePage = 'map';
    res.render('map', { navLinks, activePage});
});

app.get('/visualizations', (req, res) => {
    let activePage = 'visualizations';
    res.render('visualizations', { navLinks, activePage });
});

app.get('/about', (req, res) => {
    let activePage = 'about';
    res.render('about', { navLinks, activePage });
});

app.get('/quellen', (req, res) => {
    let activePage = 'quellen';
    res.render('quellen', { navLinks, activePage });
});

app.get('/stories/:path', (req, res) => {
    const { path } = req.params;    // Extract the path parameter
    res.render(`stories/${path}`); // Dynamically render the EJS file
  });
  

app.listen(3000, () => { // Start the server on port 3000
    console.log("Listening on port 3000");
})