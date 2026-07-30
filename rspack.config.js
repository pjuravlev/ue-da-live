import { defineConfig } from '@rspack/cli';
import * as path from 'node:path';

export default defineConfig({
  mode: 'production',

  entry: {
    wc: './scripts/wc.js'
  },

  output: {
    filename: '[name].js',
    path: './scripts/dist',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(
            process.cwd(),
            'scripts/components'
          )
        ],
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },

  plugins: [
  ]
});