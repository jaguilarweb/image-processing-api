import imageExist from '../utilities/imageExist';
import path from 'path';

describe('Test ImageExist function response:', () => {

  const imagePath: string = path.join(
    __dirname,
    '..',
    'assets',
    'images',
    'fjord.jpg'
  );
  
  console.log(imagePath)
  const pathNoExistingFile = 'fackeimagePath';
  const pathExistingFile = imagePath;
  it('The file not exist', async () => {
    const result = await imageExist(pathNoExistingFile);
    expect(result).toEqual(false);
  });
  it('The file exist', async () => {
    const result = await imageExist(pathExistingFile);
    expect(result).toEqual(true);
  });
});