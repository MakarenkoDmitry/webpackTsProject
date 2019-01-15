const webpack = require('webpack');

module.exports = function () {
    const { isDevelopment } = this,
        plugins = [];

    if(isDevelopment){
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return ({
        plugins
    });
};
