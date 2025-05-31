import express from 'express';
import CORS from 'cors';
import mainRouter from './routes/routes.js'
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000
const DB_URL = 'mongodb+srv://admin:Evilgood666@cluster0.lsxsfds.mongodb.net/TDUnion'


mongoose.connect(DB_URL)
.then(() => console.log("Ok, connect"))
.catch((err) => console.log(`Error ${err}`));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(CORS())
app.use('/', mainRouter)
app.use(helmet());
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Link: http://localhost:${PORT}`);
});