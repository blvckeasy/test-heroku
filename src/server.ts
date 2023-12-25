import Express from 'express';
import DotEnv from 'dotenv';

DotEnv.config();

const app = Express()
const PORT = process.env.PORT || 5173;

app.get("/", (req, res) => {
    res.status(200).send("ok");
})

app.get("/ping", (req, res) => {
    res.status(200).send("pong");
})

app.listen(PORT, () => {
    console.log(`server is listening on *${PORT}`);
})