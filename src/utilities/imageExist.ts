import { promises as fsPromises } from 'fs';

const imageExist = async (imageResizedPath: string): Promise<boolean> => {
  try {
    await fsPromises.access(imageResizedPath);
    return true;
  } catch (error) {
    console.log(false);
    return false;
  }
};

export default imageExist;
