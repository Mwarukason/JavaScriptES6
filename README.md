# JavaScriptES6

EcmaScript 6.
#Arrow functions, enchanced collections, generators, etc
code feels clean, intuitive and well designed.(Bt problem with web).

#Babel and Webpack help create an ES6 Development environment.

#Why Babel and transpilers.?
#transpilers:
  - Browsers only have widespread support of older JS.
  - Transpilers Convert advanced TypScript and CoffeeScript code back into the original JS.

  Eg. Babel:(babeljs.io)

#Webpack
 - It bundles modules into .js file
 - comes with a dev-server

 #Start work with Webpack:
  - npm init -y
  - npm install --save-dev webpack
  - commit to push to github
  - Open atom editor, add two folder, build(add inde.html) & app(add index.js).
  - to make webpack working we need specific configuration file. On top we need to specify the entry(./app/index.js) and output(path: './build', filename: 'bundle.js'). webpack converts the app/index.js into bundle.
  -we need to write scripts on package.json ("build": "webpack"). run from the terminal (npm run build).

  #WebpacktroubleshootingSolutions:
   -   path: __dirname + '/build' OR
   -   path: __dirname + '/dist/js'
   -   npm install webpack -g
   -   Webpack version ^1.14.0
   -   delete node_modules folder, run npm install.

   #AddingBabel:
   - npn install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --save-dev

   --babel-core: main core run lot of modules transform es6 to js code.
   --babel-loader: accomplish transformation.
   --webpack-dev-server: gives automatic web server update.
   --babel-preset-es2015: specify conversion es2015.
   --babel-polyfill: is like plagin that allows es6 & webpack to run natively in the browsers

   #Updatethewebpack.config.js:
   - module (loader,test,exclude)

   #updatespackage.json:
   -  
