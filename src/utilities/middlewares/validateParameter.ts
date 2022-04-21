import express from 'express';

const validate = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  if (req.query.filename === undefined) {
    res.status(400).send('The filename is missing. Please, try again.');
  } else if (req.query.width === undefined || Number(req.query.width) <= 0) {
    res.status(400).send('The width is missing or less than 0. Please, try again.');
  } else if (req.query.height === undefined || Number(req.query.height) <= 0) {
    res.status(400).send('The width is missing or less than 0. Please, try again.');
  } else {
    next();
  }
};

export default validate;
