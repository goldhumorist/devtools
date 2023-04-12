import express from 'express';
import cors from 'cors';
import { basicRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', basicRoutes());

export { app };
