import express from 'express';
//import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import path from 'path';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Connected...');
});

// http://localhost:3000/api/images?filename=argentina&width=200&height=200'


app.get('/api/images', async (req, res) => {

  try {
    const image = await sharp(path.join(__dirname, 'assets', 'images', 'fjord.jpg'))
    .resize(200, 200)
    .toFile(path.join(__dirname, 'assets', 'thumbs', 'output.jpg'));
    console.log(image);

  } catch (error) {
    console.error('An error: ', error)
  }
}); 




//Start de express server

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


export default app;