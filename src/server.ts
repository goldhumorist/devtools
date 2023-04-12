import { app } from './app';

const PORT = 3000;

app.listen({ port: PORT }, () => {
  console.log(`Server listening at ${PORT}`);
});
