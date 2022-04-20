import express from 'express';
import { promises as fsPromises, constants} from 'fs';
import sharp from 'sharp';
import path from 'path';

const app = express();
const port = 3000;


app.get('/api', (req, res) => {
  res.send('Connected...');
});

// http://localhost:3000/api/images?filename=argentina&width=200&height=200'


app.get('/api/images', async (req, res) => {

  // To obtain parameters
  const parameter = req.query;
  const imageName : string = String(parameter.filename);
  const imageWidth : number = Number(parameter.width);
  const imageHeight : number = Number(parameter.height);
  const imagePath: string = path.join(__dirname, 'assets', 'images', `${imageName}.jpg`)
  const imageResizedPath : string = path.join(__dirname, 'assets', 'thumbs', `${imageName}_${imageWidth}x${imageHeight}.jpg`) 

  console.group("Información del Path Image")
  console.log('Info antes: ' + imageResizedPath);

  const imageExist = async () : Promise<boolean> => {
    try {
      await fsPromises.access(imageResizedPath)
      return true 
    } catch (error) {
      console.log(false)
      return false
    }
  }


    if(!await imageExist()){
      try {
        await sharp(imagePath)
        .resize(imageWidth, imageHeight)
        .toFile(imageResizedPath);
        //To show the image on screen and to close the server connection "send" 
        console.log('La imagen no existe, fue creada');
        res.status(200).sendFile(imageResizedPath);

      } catch (error:unknown) {
        console.error('An error: ', error)
      }
    } else {
      console.log('La imagen existe, envío la que está en el directorio')
      console.groupEnd();
      res.status(200).sendFile(imageResizedPath);
    }
}); 



//Start de express server

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


export default app;