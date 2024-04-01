const http = require("http");

const { readFileSync } = require("fs");

// get all files

const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);

    res.end();
  } else if (url == "/about") {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url == "/contact") {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else {
    console.log(req.method);
    console.log(req.url);
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.write(`
      <h1>Oops!</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <a href="/">Back Home</a>
    `);

    res.end();
  }
});

server.listen(5000);
