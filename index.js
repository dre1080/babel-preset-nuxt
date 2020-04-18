module.exports = function babelPresetNuxt(api) {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0');

  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  const presets = [
    env === 'test'
      ? [
          require('@babel/preset-env'),
          {
            targets: {
              node: 'current',
            },
          },
        ]
      : [require('@nuxt/babel-preset-app')],
  ];

  const plugins = [
    require('@babel/plugin-proposal-optional-chaining'),
    require('@babel/plugin-proposal-nullish-coalescing-operator'),
    require('@babel/plugin-syntax-dynamic-import'),
  ];

  return {
    presets,
    plugins,
  };
};
