const express = require("express");
const routes = require("./routes");
require('dotenv').config({ path: __dirname+'/.env' });
const app = express();
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/', routes);
app.all('*', (req, res) => res.status(404).send({
  success: false,
  message: 'route tidak ditemukan',
  code: 404,
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});