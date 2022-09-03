const http = require("http");
const open = require("open");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write("<html><body><p>This is the home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/instagram/:username") {
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write(
      `<html><body><p>username: ${req.params.username}</p></body></html>`
    );
    res.end();
    // res
    //   .writeHead(301, {
    //     Location: `instagram://user?username=${req.params.username}`,
    //   })
    //   .end();
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<html><body><p>Opening IG in new tab.</p></body></html>");
    // (async () => {
    //   // Opens the image in the default image viewer and waits for the opened app to quit.
    //   // await open("unicorn.png", { wait: true });
    //   // console.log("The image viewer app quit");

    //   // Opens the URL in the default browser.
    //   // await open("instagram://user?username=jaredonajourney", function (err) {
    //   //   if (err) throw err;
    //   // });
    //   await open("http://www.instagram.com", function (err) {
    //     if (err) throw err;
    //   });

    //   // Opens the URL in a specified browser.
    //   // await open("https://sindresorhus.com", { app: "firefox" });

    //   // Specify app arguments.
    //   // await open("https://sindresorhus.com", {
    //   //   app: ["google chrome", "--incognito"],
    //   // });
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write("<html><body><p>Opened IG in new tab.</p></body></html>");
    //   res.end();
    // })();
    // open("http://www.instagram.com");
    // open("instagram://user?username=jaredonajourney");
    // res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is student Page.</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
