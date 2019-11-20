const presets = [
  
    '@babel/preset-env',
    {
      targets: {
        browsers: ['last 2 versions', 'safari >= 8'],
      },
    },
  ],
  '@babel/preset-react',
];
const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = { presets, plugins };
