module.exports = function babelPresetNuxt(api) {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0');

  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  const presets = [
    env === 'test'
      ? [
          require('@babel/preset-env').default,
          {
            targets: {
              node: 'current',
            },
          },
        ]
      : require.resolve('@nuxt/babel-preset-app'),
  ];

  const plugins = ['@babel/plugin-proposal-optional-chaining'];

  return {
    presets,
    plugins,
  };
};
