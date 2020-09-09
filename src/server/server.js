import express from 'express';
import dotenv from 'dotenv'
import webpack from 'webpack'

dotenv.config();

const{ENV,PORT} = process.env;

const app = express();

if(ENV === 'development')
{
    console.log("Development config");

    const webpackConfig = require('../../webpack.config.server');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = {port:PORT, hot:true};

    app.use(webpackDevMiddleware(compiler,serverConfig));
    app.use(webpackHotMiddleware(compiler));

}


app.get('*', (req, res) => {
    
                res.send(`
                <!doctype html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width,initial-scale=1">
                        <title>Segurimas Per&uacute; - Tienda Online</title>
                        <link href="/assets/app.css" rel="stylesheet">
                    </head>
                    <body>
                        <div id="app"></div>
                        <script src="/js/app.js" type="text/javascript"></script>
                    </body></html>
                `);
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });