module.exports = {
  presets: ['@nuxt/babel-preset-app'],
  plugins: ['@babel/plugin-proposal-optional-chaining'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
