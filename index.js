const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');
const config = require('./config/config.js'); // Update the routes depending on the location of the project
// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var indexRouter = express.Router();
// Serve static files under the /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount the dynamic routes AFTER static files
app.use('/', indexRouter);

// Define the navigation links:
const navLinks = {
  home: '/kunstaufdemcampus/',
  map: 'map',
  visualizations: 'visualizations',
  about: 'about',
  datenschutz: 'datenschutz',
  quellen: 'quellen',
  impressum: 'impressum',
};

// Routes:
indexRouter.get('/kunstaufdemcampus/', (req, res) => {
  let activePage = 'home';
  res.render('home', { navLinks, activePage }); // Pass the navigation links to the EJS template
});

indexRouter.get('/map', (req, res) => {
  let activePage = 'map';
  res.render('map', { navLinks, activePage });
});

indexRouter.get('/visualizations', (req, res) => {
  let activePage = 'visualizations';
  res.render('visualizations', { navLinks, activePage});
});

indexRouter.get('/about', (req, res) => {
  let activePage = 'about';
  res.render('about', { navLinks, activePage });
});

indexRouter.get('/datenschutz', (req, res) => {
  let activePage = 'datenschutz';
  res.render('datenschutz', { navLinks, activePage });
});

indexRouter.get('/quellen', (req, res) => {
  let activePage = 'quellen';
  res.render('quellen', { navLinks, activePage });
});

indexRouter.get('/impressum', (req, res) => {
  let activePage = 'impressum';
  res.render('impressum', { navLinks, activePage });
});

indexRouter.get('/stories/:path', (req, res) => {
  const { path } = req.params; // Extract the path parameter
  res.render(`stories/${path}`); // Dynamically render the EJS file
});

app.listen(3001, () => {
  // Start the server on port 3001
  console.log('Listening on port 3001');
});
