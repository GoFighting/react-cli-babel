var webpack = require('webpack');
var express = require('express');
var config = require('../config/webpack.dev.config');
var path = require('path');
var environments_config = require('../config/environments.config');

// var proxyMiddleware = require('http-proxy-middleware')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: '/',
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));

//代理服务器
// app.use('/shopro', proxyMiddleware({
//     target: 'https://gofighting.github.io/',
//     changeOrigin: true,
// }))

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res, next) {
	const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})

app.listen(environments_config.server_port, function() {
	console.log('正常打开8080端口')
});
