const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#096979',
                            '@font-family': '"Trebuchet MS", Helvetica, sans-serif',
                            '@font-size-base': '20px'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};