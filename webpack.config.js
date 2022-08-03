const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, 'src', 'helpers')
        }
      }
    ]
  },
  plugins: [
    new HandlebarsPlugin({
      // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
      entry: path.join(process.cwd(), 'src', '*.hbs'),
      // output path and filename(s). This should lie within the webpacks output-folder
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), 'dist', '[name].html'),
      // you can als add a [path] variable, which will emit the files with their relative path, like
      // output: path.join(process.cwd(), "build", [path], "[name].html"),

      // globbed path to partials, where folder/filename is unique
      partials: [
        path.join(process.cwd(), 'src', 'components', '*.hbs'),
        path.join(process.cwd(), 'src', 'components', '*', '*.hbs')
      ]
    })
  ]
};

module.exports = webpackConfig;
