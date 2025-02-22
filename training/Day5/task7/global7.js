const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to the Home Page!</h1>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1><p>This is the about page.</p>');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('<h1>Contact Us</h1><p>This is the contact page.</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>Page Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
