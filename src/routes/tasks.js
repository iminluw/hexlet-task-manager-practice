export default async (fastify) => {
  fastify.get('/', async () => ({ message: 'Список задач' }));
  fastify.post('/', async () => ({ message: 'Задача создана' }));
};
