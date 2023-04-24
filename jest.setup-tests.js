const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

window.document.documentElement.innerHTML = html
  .replace(/\n*/g, "")
  .match("<html>(.*)</html>")[1];

require("./index.js");
