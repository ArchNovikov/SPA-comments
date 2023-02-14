const express = require('express');
require('dotenv').config();

const router = require('./routes/index')
const app = express();
app.use(express.json());
app.use('/', router);


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

console.log()


