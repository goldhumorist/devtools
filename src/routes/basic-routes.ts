import { Request, Response } from 'express';

const ping = (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: 'pong' });
};

const greeting = (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: 'Hello World!' });
};

const test = (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: 'Test Route' });
};

export { ping, greeting, test };
