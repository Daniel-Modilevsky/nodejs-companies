import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {companyRoutes} from "./routes/route_company";
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(companyRoutes)
app.get('/', (req: Request, res: Response) => {
    res.send('Node Js assigment - 13.02.23 - Good luck!');
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});