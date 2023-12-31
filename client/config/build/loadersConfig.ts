import {ModuleOptions} from 'webpack';
import {BuildOptions} from './index';
import {buildCssLoader} from './loaders/buildCssLoader';

export const loadersConfig = ({mode}: BuildOptions): ModuleOptions['rules'] => {
  const isDev = mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = [
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            typescript: true
          }
        }
      ],
    }
  ];

  const stylesheetLoader = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: isDev ? 'automatic' : 'classic',
            }
          ]
        ],
        plugins: [isDev && 'react-refresh/babel'].filter(Boolean)
      }
    }
  };


  return [
    assetLoader,
    ...svgLoader,
    stylesheetLoader,
    babelLoader
  ];
};