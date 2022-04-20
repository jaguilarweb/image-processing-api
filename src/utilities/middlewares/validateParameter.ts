import express from 'express';

const validate = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  console.log('Se ejecuta el middleware');
  if (req.query.filename === undefined) {
    res.send('The filename is missing');
  } else if (req.query.width === undefined) {
    res.send('The width is missing');
  } else if (req.query.height === undefined) {
    res.send('The width is missing');
  } else {
    next();
  }
};

export default validate;
