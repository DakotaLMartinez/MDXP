const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const remarkEmoji = require('remark-emoji');
const remarkMath = require('remark-math');
const remarkFlattenImages = require('mdast-flatten-image-paragraphs');
const rehypeAutoImport = require('@mdxp/rehypex-plugins/auto-import');
const rehypeBetterMedia = require('@mdxp/rehypex-plugins/better-media');
const rehypeTableAlign = require('@mdxp/rehypex-plugins/table-align');
const rehypeKatex = require('rehype-katex');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/web'),
    filename: 'main.js',
    publicPath: ASSET_PATH
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        modules: false,
                        targets: '> 0.25%, not dead'
                      }
                    ],
                    '@babel/preset-react'
                  ]
                }
              }
            ]
          },
          {
            test: /\.mdx$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        modules: false,
                        targets: '> 0.25%, not dead'
                      }
                    ],
                    '@babel/preset-react'
                  ]
                }
              },
              {
                loader: '@mdx-js/loader',
                options: {
                  remarkPlugins: [
                    remarkEmoji,
                    remarkMath,
                    remarkFlattenImages
                  ],
                  rehypePlugins: [
                    rehypeKatex,
                    rehypeTableAlign,
                    [rehypeBetterMedia, {videoMarker: '!video!'}],
                    [rehypeAutoImport, {noImport: '!noimport!'}]
                  ]
                }
              }
            ]
          },
          {
            test: /\.html$/,
            use: ['html-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgo: false
                }
              },
              'url-loader'
            ]
          },
          {
            test: /\.(png|jpe?g|gif|bmp|webp)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            exclude: [/\.(js|mjs|jsx|mdx)$/, /\.html$/, /\.json$/],
            use: ['file-loader']
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ],

  node: {
    fs: 'empty'
  }
};
