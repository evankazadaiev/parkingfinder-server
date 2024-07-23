// eslint-disable-next-line @typescript-eslint/no-var-requires
const index = require('json-server');
const server = index.create();
const router = index.router('db.json');
const middlewares = index.defaults();

server.use(middlewares);
server.use('/api', router);
// eslint-disable-next-line no-undef
server.listen(process.env.JSON_SERVER_PORT || 3000, () => {
  console.log('JSON Server is running');
});
