const path = require('path');

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const moduleFederation = new ModuleFederationPlugin({
   name: 'host',
   filename: 'host.entrypoint.js',
   remotes: {
      'firstRemote': 'somePackage@http://localhost:9001/somePackage.entrypoint.js',
      'secondRemote': 'anotherPackage@http://localhost:9002/anotherPackage.entrypoint.js'
   }
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
   title: 'module federation'
});

const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
   entry: './src/bootstrap.js',
   output: {
      filename: 'main.js',
      path: outputDir,
      clean: true
   },
   devServer: {
      contentBase: outputDir,
      compress: true,
      port: 9000
   },
   plugins: [
      moduleFederation,
      htmlPlugin
   ]
};