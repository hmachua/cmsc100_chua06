import express from 'express';
import router from './router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

app.listen(port);
console.log("Server started at port ${port}...")