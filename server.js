import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// Имитация базы данных
const tasks = [
  { id: 1, name: 'Настроить проект', status: 'finished' },
  { id: 2, name: 'Написать отчет по практике', status: 'in_progress' },
];

fastify.get('/api/tasks', async (request, reply) => {
  return tasks;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running on port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
