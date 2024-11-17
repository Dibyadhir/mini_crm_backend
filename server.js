import express from 'express';
import cors from 'cors';
import router from './routes/controutes.js';
import { addcontactdata, viewContData } from './controllers/contactdata.js';
import bodyParser from 'body-parser';


import db from './config/connectiondb.js'

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', router);
app.use('/', addcontactdata);
app.use('/', viewContData);

app.listen(8080,()=>{
    console.log('Hii server is running at: http://localhost:8080/')
})