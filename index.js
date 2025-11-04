import express from "express";

const app = express();
const port = 8000;

app.listen(port);
console.log(`Servidor en el puerto ${port}.\n\nLink: http://localhost:8000`);

app.get("/", (req, res) => {
    res.send("<h1>Hola :D</h1>");
});