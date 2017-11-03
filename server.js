import webpack from 'webpack';
import { createServer } from 'http';
import express from 'express';
import { resolve } from 'path';
import config from './webpack';

const app = express();

app.set('port', 4000);
app.use(express.static('./'));

(() => {
  const compiler =  webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    reload: true
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
})();

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './frontend/index.html'));
});

const server = createServer(app);
server.listen(process.env.PORT || 4000, () => {
  console.log('Listen on %', server.address());
})
