const express = require('express');

const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {});
})

app.listen(port, () => {
  console.log(`Application is ready to server on PORT ${port}`);
});