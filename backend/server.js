const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./mock-data.json')

app.use(bodyParser.json());
app.use(cors());


app.get('/api/exams', (req, res) => {
  res.json(data.exams);
});

app.post('/api/exams', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});