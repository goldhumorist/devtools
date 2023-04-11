import {
  FastifyInstance,
  FastifyRegisterOptions,
  FastifyReply,
  FastifyRequest,
  FastifyPluginOptions,
} from 'fastify';

const ping = (
  fastify: FastifyInstance,
  options: FastifyRegisterOptions<FastifyPluginOptions>,
  done: (err?: Error | undefined) => void,
) => {
  fastify.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send('pong');
  });

  done();
};

const greeting = (
  fastify: FastifyInstance,
  options: FastifyRegisterOptions<FastifyPluginOptions>,
  done: (err?: Error | undefined) => void,
) => {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ status: 200, message: 'Hello World!' });
  });

  done();
};

export { ping, greeting };
