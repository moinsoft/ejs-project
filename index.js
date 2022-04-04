const express = require('express');

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'))


app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Application is ready to server on PORT ${port}`);
});