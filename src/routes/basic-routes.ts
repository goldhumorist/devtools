import { Request, Response } from 'express';

const ping = (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: 'pong' });
};

const greeting = (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: 'Hello World!' });
};

export { ping, greeting };
