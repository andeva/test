// Importing the built-in 'http' module
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.setHeader('Content-Type', 'text/plain');

  // Sending a response
  res.end('Hello, World!');
});

// Listening on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server is running on http://localhost:3000');
});
