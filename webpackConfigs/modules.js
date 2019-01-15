const autoprefixer = require('autoprefixer');

module.exports = function () {
    const { isDevelopment, PATH } = this;

    return ({
        module: {
            rules: [
                {
                    test: /\.(css|scss|sass)$/,
                    include: PATH.style,
                    use:  [
                        { loader: 'style-loader', options: { sourceMap: isDevelopment } },
                        { loader: 'css-loader', options: { sourceMap: isDevelopment } },
                        { loader: 'postcss-loader', options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 8', 'last 4 version']
                                    })
                                ],
                                sourceMap: isDevelopment
                            }
                        },
                        { loader: 'sass-loader', options: { sourceMap: isDevelopment } }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 100000
                            }
                        }
                    ]
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ],
                        }
                    }
                }
            ]
        },
    });
};
