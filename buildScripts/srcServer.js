import express from 'express';
import path from 'path';
import open from 'open';
import Chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(Chalk.red(err));
    } else {
        /* console.log(Chalk.green("Starting app in dev mode...")); */
        open('http://localhost:' + port);
    }
});