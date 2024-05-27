const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const axios = require('axios');
const { json } = require('body-parser');
const projectsRouter = require('./routers/projectsRouter');
const filesRouter = require('./routers/filesRouter');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.get("/", (req, res) => {
    res.render('index')
})

app.use('/projects', projectsRouter);

app.use('/files', filesRouter);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})