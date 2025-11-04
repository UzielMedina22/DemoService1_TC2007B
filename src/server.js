import express from "express";
import postRoutes from "./routes/postRoutes"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json())
app.use(cors())
app.use("/api/posts", postRoutes)

app.listen(port);

app.get("/", (req, res) => {
    res.send("<h1>Hola :D</h1>");
});

console.log(`Servidor en el puerto ${port}.\n\nLink: http://localhost:${port}`);