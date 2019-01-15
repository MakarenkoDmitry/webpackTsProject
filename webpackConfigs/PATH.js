module.exports = function () {
    const { __dirname } = this;

    return ({
        entry: './src',
        development: `${__dirname}/dist/development`,
        production: `${__dirname}/dist/production`,
        style:  `${__dirname}/style`,
    });
};