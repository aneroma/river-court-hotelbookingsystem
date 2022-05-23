const http = require('http');
const {app} = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port:${process.env.PORT}`);
});
