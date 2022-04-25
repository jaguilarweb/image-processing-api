import express from 'express';
import path from 'path';
import logger from '../../utilities/middlewares/logger';
import validateParameter from '../../utilities/middlewares/validateParameter';
import imageExist from '../../utilities/imageExist';
import imageResizing from '../../utilities/imageResizing';

const images = express.Router();
const middleware = [logger, validateParameter];

// http://localhost:3000/api/images?filename=argentina&width=200&height=200'

images.get(
  '/',
  middleware,
  async (req: express.Request, res: express.Response): Promise<void> => {
    // To obtain parameters
    const parameter = req.query;
    const imageName: string = String(parameter.filename);
    const imageWidth: number = Number(parameter.width);
    const imageHeight: number = Number(parameter.height);
    const imagePath: string = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'assets',
      'images',
      `${imageName}.jpg`
    );
    const imageResizedPath: string = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'assets',
      'thumbs',
      `${imageName}_${imageWidth}x${imageHeight}.jpg`
    );

    if (!(await imageExist(imageResizedPath))) {
      try {
        await imageResizing(
          imagePath,
          imageWidth,
          imageHeight,
          imageResizedPath
        );
        //To show the image on screen and to close the server connection "send"
        res.status(200).sendFile(imageResizedPath);
      } catch (error: unknown) {
        res
          .status(400)
          .send(
            'There are a missing information in your request. Please try again!'
          );
      }
    } else {
      res.status(200).sendFile(imageResizedPath);
    }
  }
);

export default images;
