const express = require("express");
const app = express();
const port = 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description" content="Shop the best coffee beans online. Freshly roasted and delivered to your door. Discover bold flavors and top-rated blends today.">
            <title>Bootstrap demo</title>
        </head>
        <body>
            <h1>Hello, world!</h1>
        </body>
    </html>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
