import { build } from './app';

const server = build({ logger: true });

server.listen({ port: 3000 }, (err: Error | null, address: string) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
