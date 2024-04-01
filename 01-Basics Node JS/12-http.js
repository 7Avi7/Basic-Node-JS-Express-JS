const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.end("Welcome to our home page!");
  } else if (req.url === "/about") {
    res.setHeader("content-type", "text/html");
    res.end("Here is our short history");
  } else {
    res.setHeader("content-type", "text/html");
    res.end(`
      <h1>Oops!</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <a href="/">Back Home</a>
    `);
  }
});

server.listen(5000);
