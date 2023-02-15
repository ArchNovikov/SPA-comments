const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const router = require('./routes/index');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileUpload({}))
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT;

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}


start();


