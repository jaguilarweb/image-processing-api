import express from 'express';
//import path from 'path';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Connected...');
});

//Start de express server

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


export default app;