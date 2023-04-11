import fastify, { FastifyHttpOptions, FastifyBaseLogger } from 'fastify';
import fastifyCookie from '@fastify/cookie';
import { IncomingMessage, ServerResponse } from 'http';
import { Server } from 'https';
import { greeting, ping } from './routes/basic-routes';

const build = (
  opts: FastifyHttpOptions<
    Server<typeof IncomingMessage, typeof ServerResponse>,
    FastifyBaseLogger
  > = {},
) => {
  const app = fastify(opts);

  app.register(fastifyCookie);

  app.register(ping);
  app.register(greeting);
  //   app.register(auth, { prefix: '/auth' });

  return app;
};

export { build };
