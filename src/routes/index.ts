import express from 'express';
import { greeting, ping, test } from './basic-routes';

const router = express.Router();

const basicRoutes = () => {
  router.get('/', greeting);
  router.get('/ping', ping);
  router.get('/test', test);

  return router;
};

export { basicRoutes };
