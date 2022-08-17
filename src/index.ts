import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const port: string | number = process.env.PORT || 8080;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req: Request, res: Response) => res.send("Welcome to the Typing Game API"));

app.listen(port, () => console.info(`Listening on port: ${port}`));
export default app;
