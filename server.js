const path = require('path');
const express = require('express');

module.exports = {
  app: () => {
    const app = express();
    const indexPath = path.join(__dirname, './public/index.html');
    const publicPath = express.static(path.join(__dirname, './public'));

    app.use('/public', publicPath);
    app.get('/', (req, res) => {
      res.sendFile(indexPath);
    });
    app.all('*', (req, res) => {
      res.sendFile(indexPath);
    });

    return app;
  }
};
