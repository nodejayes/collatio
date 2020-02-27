module.exports = {
    entry: {
        'vigillia': './index.js',
    },
    mode: 'production',
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        library: 'vigillia',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
};
