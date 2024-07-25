const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
//var favicon = require('serve-favicon')
const { json } = require('body-parser');
const projectsRouter = require('./routers/projectsRouter');
const filesRouter = require('./routers/filesRouter');
const MatomoTracker = require('matomo-tracker');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

var matomo = new MatomoTracker(1, 'http://votre-serveur-matomo.com/matomo.php');

app.use(function(req, res, next) {
    matomo.track({
      url: req.protocol + '://' + req.get('host') + req.originalUrl,
      action_name: 'Page view',
      ua: req.headers['user-agent']
    });

    next();
});

app.get("/", (req, res) => {
    res.render('index')
})

app.use('/projects', projectsRouter);

app.use('/files', filesRouter);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})