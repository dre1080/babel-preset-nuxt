import { declare } from '@babel/helper-plugin-utils';

export default declare((api) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0');

  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  const presets = [
    env === 'test'
      ? [
          '@babel/preset-env',
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
});
