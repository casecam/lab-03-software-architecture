import React from "react";
import express from "express";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/App";

const app = express();

app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });

  return res.send(`
		<html>
			<body>
				<div id="root">${reactApp}</div>
			</body>
		</html>
	`);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
