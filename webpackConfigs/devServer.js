module.exports = function () {
    return ({
        devServer: {
            contentBase: './dist',
            hot: true,
            historyApiFallback: true,
            port: 8000
        }
    });
};
