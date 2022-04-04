const express = require('express');

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let pLanguages = [];

app.get('/', (req, res) => {
  const title = 'Home Page | Welcome To EJS'
  res.render('home', { plNames: pLanguages, title });
})

app.get('/contact', (req, res) => {
  const title = 'Contact Page'
  res.render('contact', { title });
});

app.post('/', (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect('/')
});

app.listen(port, () => {
  console.log(`Application is ready to server on PORT ${port}`);
});