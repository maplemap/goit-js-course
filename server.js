const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo/:id', (req, res) => {
  const timeout = getRandomArbitrary(300, 1500);

  setTimeout(() => {
    res.send({ id: req.params.id });
  }, timeout);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(4040, () => {
  console.log('JSON Server is running');
});
