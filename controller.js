

let pLanguages = [];

exports.homeController = (req, res) => {
  
  const title = 'Home Page | Welcome To EJS'
  res.render('home', { plNames: pLanguages, title });
};


exports.contactController = (req, res) => {
  const title = 'Contact Page'
  res.render('contact', { title });
};

exports.bodyController = (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect('/')
};