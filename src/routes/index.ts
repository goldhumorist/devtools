import express from 'express';
import { greeting, ping } from './basic-routes';

const router = express.Router();

const basicRoutes = () => {
  router.get('/', greeting);
  router.get('/ping', ping);

  return router;
};

export { basicRoutes };
