const http = require("http");
const { URL } = require("url");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    const userData = { "name": name, "email": email };
    const jsonResponse = JSON.stringify(userData);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(jsonResponse);
  } else if (url.pathname === "/") {
    res.writeHead(200);
    res.end("Welcome to the homepage!");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
};

const server = http.createServer(requestListener);
module.exports = server;
