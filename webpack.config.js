module.exports = {
    entry: {
        'collatio': './index.js',
    },
    mode: 'production',
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        library: 'collatio',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
};
