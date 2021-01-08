const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const CWD = process.cwd();
const isProd = process.env.NODE_ENV === 'production';
console.log('is prod', isProd);

module.exports = {
    devtool: isProd ? 'source-map' : 'eval-source-map',
    devServer: {
        port: 4001
    },
    entry: {
        app: './src/app.ts'
    },
    mode: isProd ? 'production' : 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    {
                        // Translates CSS into CommonJS
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportLocalsConvention: 'camelCaseOnly',
                                localIdentName: '[local]___[hash:base64:5]'
                            },
                            sourceMap: true
                        }
                    },
                    {
                        // Compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                includePaths: [path.resolve(CWD, 'src/styles')]
                            }
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            meta: {
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                viewport: 'width=device-width, initial-scale=1'
            },
            title: 'nectar'
        })
    ],
    resolve: {
        alias: {
            '@darkkenergy/nectar': '@app/../../nectar/src',
            '@data': 'data',
            '@app': 'src'
        },
        extensions: ['.css', '.js', '.scss', '.ts'],
        modules: ['node_modules', path.resolve(__dirname)]
    },
    target: 'web'
};
