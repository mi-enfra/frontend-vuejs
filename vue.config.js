const fs = require('fs');

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('./../../conf/ssl/localhost.key'),
            cert: fs.readFileSync('./../../conf/ssl/localhost.crt'),
            ca: fs.readFileSync('./../../conf/ssl/RootCA.pem'),
        }
    }
}