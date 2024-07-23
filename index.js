// eslint-disable-next-line @typescript-eslint/no-var-requires
const index = require('json-server');
const server = index.create();
const router = index.router('db.json');
const middlewares = index.defaults();

const PORT = process.env.PORT || 8080;

server.use(middlewares);
server.use('/api', router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port -> ${PORT}`);
});
