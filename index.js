const express = require("express");
const router = require("./roteadores/roteador");

const app = express();

app.use(router)

app.listen(8000);