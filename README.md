# Content of this repository

This repository contains 3 litte projects :

- remote-package-1 : a package that exposes a service with two methods : 
```javascript
   doSomethingWithPackage1() {
      console.log('something is done by package 1');
   },
   getPackageName() {
      return 'remote-pacakge-1';
   }
```
- remote-package-2 : a pacakge that exposes a service with two methods ;
```javascript
   doSomethingWithPackage2() {
      console.log('something else is done by package 2');
   },
   getPackageName() {
      return 'remote-pacakge-2';
   }
```
- host: a host application that consumes `remote-package-1` and `remote-package-2` via module federation

# Purpose of this repository

The purpose of this repository is to demonstrate a problem with module federation.

The host app consumes two remotes that are not related. However, the structure of these projects are similar : the two of them exposes different files **of the same path** : `./src/main.js`.

remote-package-1 :
```javascript
const moduleFederation = new ModuleFederationPlugin({
   name: 'somePackage',
   filename: 'somePackage.entrypoint.js',
   exposes: {
      './x': './src/main'
   }
});
```

remote-pacakge-2 :
```javascript
const moduleFederation = new ModuleFederationPlugin({
   name: 'anotherPackage',
   filename: 'anotherPackage.entrypoint.js',
   exposes: {
      './y': './src/main'
   }
});
```

The host app *should* be able to use functions of both packages. But since the pat of exposed files are the same, the module from the second remote is never loaded.

# Run the demo

In each folders, run `npm install` and `npm run serve`.

host-app runs on http://localhost:9000.
remote-package-1 runs on http://localhost:9001.
remote-package-2 runs on http://localhost:9002.