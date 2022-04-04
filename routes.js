const router = require('express').Router();

let pLanguages = [];

router.get('/', (req, res) => {
  const title = 'Home Page | Welcome To EJS'
  res.render('home', { plNames: pLanguages, title });
})

router.get('/contact', (req, res) => {
  const title = 'Contact Page'
  res.render('contact', { title });
});

router.post('/', (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect('/')
});

module.exports = router;









