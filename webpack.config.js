const PATH = require('./webpackConfigs/PATH'),
    getCommon = require('./webpackConfigs/common'),
    getModules = require('./webpackConfigs/modules'),
    getPlugins = require('./webpackConfigs/plugins'),
    getDevServer = require('./webpackConfigs/devServer');

module.exports = (env, argv) => {
    let config = {},
        state = {
            isDevelopment: argv.mode === 'development',
            __dirname,
        };
    state.PATH = PATH.call(state);

    config = Object.assign(
        config,
        getCommon.call(state),
        getModules.call(state),
        getPlugins.call(state)
    );

    if (state.isDevelopment) {
        config = Object.assign(
            config,
            getDevServer.call(state),
        );
        config.devtool = 'eval-source-map';
    }

    return config;
};