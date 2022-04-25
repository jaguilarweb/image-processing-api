import imageExist from '../utilities/imageExist';
import path from 'path';

describe('Test ImageExist function response:', () => {
  const pathExistingFile: string = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'images',
    'fjord.jpg'
  );

  const pathNoExistingFile = 'fackeimagePath';

  it('The file not exist', async () => {
    const result = await imageExist(pathNoExistingFile);
    expect(result).toEqual(false);
  });
  it('The file exist', async () => {
    const result = await imageExist(pathExistingFile);
    expect(result).toEqual(true);
  });
});
