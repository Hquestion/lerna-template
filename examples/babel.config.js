module.exports = {
    presets: [
        '@vue/app'
    ],
    sourceType: 'unambiguous',
    plugins: [
        [
            'component-customize',
            {
                "libraryName": "@sdx/ui",
                "styleCustomize": true
            }
        ]
    ]
};
