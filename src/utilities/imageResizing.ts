import sharp from 'sharp';

const imageResizing = async (
  imagePath: string,
  imageWidth: number,
  imageHeight: number,
  imageResizedPath: string
) => {
  await sharp(imagePath)
    .resize(imageWidth, imageHeight)
    .toFile(imageResizedPath);
  //To show the image on screen and to close the server connection "send"
  return imageResizing;
};

export default imageResizing;
