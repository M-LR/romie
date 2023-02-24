const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: [{
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', {
                          "targets": "defaults" 
                        }],
                        '@babel/preset-react'
                      ]
                    },
                  }], 
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    //https://www.robinwieruch.de/webpack-react-router/
    //pour configurer webpack et react router -> react-router-dom
    // historyApiFallback: true, 
    devServer: {
        static: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
    },
}
