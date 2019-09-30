const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

///// MIDDLEWARES /////
// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CORS
app.use(cors());

///// ROUTES /////
app.get('/', (req, res) => {
  res.send('Home');
});
app.use('/api/notes', require('./routes/notes'));

///// PRIVATE ROUTES /////
app.use('/api/user', require('./routes/auth'));

///// DB CONNECT ////
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('***** CONNECTED TO DATABASE *****')
);

///// START SERVER /////
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`***** SERVER RUNNING ON PORT: ${port} *****`)
);
