const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    babel: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    useBuiltIns: false,
                },
            ],
            '@babel/preset-react',
        ],
        // plugins: [
        //     [
        //         "import",
        //         {
        //             "libraryName": "@qunhe/tools-ui",
        //             "libraryDirectory": "components",
        //             "camel2DashComponentName": false
        //         }
        //     ],
        //     [
        //         "import",
        //         {
        //             "libraryName": "@qunhe/tools-ui-pro",
        //             "libraryDirectory": "components",
        //             "camel2DashComponentName": false
        //         },
        //         "tools-ui-pro"
        //     ],
        // ]
    },
    // webpack: {
    //     plugins: {
    //         add: [
    //             [new BundleAnalyzerPlugin({
    //                 analyzerMode: 'server',
    //                 analyzerHost: '127.0.0.1',
    //                 analyzerPort: 8080,
    //                 reportFilename: 'report.html',
    //                 defaultSizes: 'parsed',
    //                 openAnalyzer: true,
    //                 generateStatsFile: false,
    //                 statsFilename: 'stats.json',
    //                 statsOptions: null,
    //                 logLevel: 'info'
    //             }), "prepend"], /* Specify if plugin should be appended or prepended */
    //         ], /* An array of plugins */
    //     }
    // },
}