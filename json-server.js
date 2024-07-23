// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
// eslint-disable-next-line no-undef
server.listen(process.env.JSON_SERVER_PORT || 3000, () => {
  console.log('JSON Server is running');
});
