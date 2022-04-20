import express from 'express';
import { promises as fsPromises, constants} from 'fs';
import sharp from 'sharp';
import path from 'path';

const images = express.Router();

// http://localhost:3000/api/images?filename=argentina&width=200&height=200'

images.get('/', async (req, res) => {
  // To obtain parameters
  const parameter = req.query;
  const imageName : string = String(parameter.filename);
  const imageWidth : number = Number(parameter.width);
  const imageHeight : number = Number(parameter.height);
  const imagePath: string = path.join(__dirname,'..','..','assets', 'images', `${imageName}.jpg`)
  const imageResizedPath : string = path.join(__dirname,'..','..', 'assets', 'thumbs', `${imageName}_${imageWidth}x${imageHeight}.jpg`);

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

export default images;
