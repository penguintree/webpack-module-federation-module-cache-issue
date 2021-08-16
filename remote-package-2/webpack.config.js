const path = require('path');

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const moduleFederation = new ModuleFederationPlugin({
   name: 'anotherPackage',
   filename: 'anotherPackage.entrypoint.js',
   exposes: {
      './y': './src/main'
   }
});

const outputDir = path.resolve(__dirname, 'dist');
module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: outputDir,
      clean: true
   },
   devServer: {
      contentBase: outputDir,
      compress: true,
      port: 9002
   },
   plugins: [
      moduleFederation
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.js']
   }
};