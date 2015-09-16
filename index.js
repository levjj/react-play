/*
Simple web service to act like a blog
and do simple CRUD operations.
*/
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/create', (req, res) => {
  //
});
app.listen(3000, () => {
  /* eslint no-console:0 */
  console.log('listening on 3000');
});
