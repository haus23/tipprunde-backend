import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('runde.tips');
});

app.listen(2605, () => {
  console.log('Backend server listening at http://localhost:2605');
});
