import Fastify from 'fastify';
import userRoutes from './modules/user/user.route';

const server = Fastify();

server.get('/healthcheck', async () => {
  return {
    status: 'OK',
  };
});

async function main() {
  try {
    server.register(userRoutes, {
      prefix: 'api/users',
    });

    await server.listen({
      port: 3000,
    });
    console.log('server running port: 3000');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
