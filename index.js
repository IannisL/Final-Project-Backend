import './loadEnv.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRouter from './routes/users.js'

const app = express()
const PORT = 3000;


// middlewares
app.use(cors()); // allows frontend to connect to backend
app.use(morgan('dev')); // logger
app.use(express.json());// for data in req.body
app.use(express.urlencoded({extended: true})); // allow data in url string

app.use('/api/users', usersRouter);
// app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
    res.send('backend...')
});

// global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});














































