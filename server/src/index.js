import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';

config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Server is running live.');
})

app.listen(PORT, () => {
    console.log(`Server is running live on PORT ${PORT}`)
})