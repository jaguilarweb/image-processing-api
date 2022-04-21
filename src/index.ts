import express from 'express';
import routes from './routes/index';

const app = express();
var port = 3000;

// I am used the routes as middleware
app.use('/api', routes);

//Start de express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
