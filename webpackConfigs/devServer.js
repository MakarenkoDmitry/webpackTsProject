module.exports = function () {
    return ({
        devServer: {
            contentBase: './dist',
            hot: true,
            port: 8080
        }
    });
};
