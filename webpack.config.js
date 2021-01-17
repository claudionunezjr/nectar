const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const CWD = process.cwd();
const isProd = process.env.NODE_ENV === 'production';
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
console.log('is prod', isProd);

module.exports = {
    // devtool: isProd ? 'source-map' : 'eval-source-map',
    // devServer: {
    //     port: 4001
    // },
    entry: {
        app: './src/app.ts'
    },
    // mode: isProd ? 'production' : 'development',
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
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            meta: {
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                viewport: 'width=device-width, initial-scale=1'
            },
            title: 'nectar'
        }),
        new PrerenderSPAPlugin({
            indexPath: path.join(__dirname, 'dist', 'index.html'),
            outputDir: path.join(__dirname, 'ssg'),
            postProcess(renderedRoute) {
                console.log('html', renderedRoute.html);
                // renderedRoute.html = renderedRoute.html
                //     .replace(/<script (.*?)>/g, `<script $1 defer>`)
                //     .replace(`id="app"`, `id="app" data-server-rendered="true"`);

                return renderedRoute;
            },
            renderer: new Renderer({
                renderAfterDocumentEvent: 'render-event'
            }),
            // Required - Routes to render.
            routes: ['/'],
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist')
        })
    ],
    resolve: {
        alias: {
            '@data': 'data',
            '@app': 'src'
        },
        extensions: ['.css', '.js', '.scss', '.ts'],
        modules: ['node_modules', path.resolve(__dirname)]
    },
    target: 'web'
};
