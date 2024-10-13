import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to ExpressJS + TypeScript');
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('This is /hello');
});

app.listen(port, () => {
    console.log(`[server]: server listening on http://localhost:${port}`);
});
