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

// CODE SMELLS
// const smells = () => {
//   const number1 = 1;
//   const number2 = 1;

//   console.log('Some log');
//   console.log('Some log1');
//   console.log('Some log2');
//   console.log('result', { number1, number2 });
// };

export { ping, greeting, test };
