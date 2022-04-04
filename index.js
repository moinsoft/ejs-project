const express = require('express');

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let pLanguages = [];

app.get('/', (req, res) => {
  res.render('home', {plNames: pLanguages});
})

app.post('/', (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect('/')
});

app.listen(port, () => {
  console.log(`Application is ready to server on PORT ${port}`);
});