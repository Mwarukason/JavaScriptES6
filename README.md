# JavaScriptES6

EcmaScript 6.
#Arrow functions, enchanced collections, generators, etc
code feels clean, intuitive and well designed.(Bt problem with web).

#Babel and Webpack help create an ES6 Development environment.

#Why Babel and transpilers.?
#transpilers:
  - Browsers only have widespread support of older JS.
  - Transpilers: reads code written in one language and produces the equivalent code in another.

  Eg. Babel:(babeljs.io)

#Webpack:
 - allows us to create an environment that transforms es6 code with babel.
 - It combines multiple modules into one js file to reduce errors and resources on the client-side.
 - Shipping with a development server, it gives us live code updating for free!

 #StartworkwithWebpack:
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
   -  added dependences, add babel & presets 2015

   #NewES6newSyntax:

   #SynthesizingES6Syntax
   #OperatingAndDestructuringAssignment:
    -Simplifies extracting data on arrays and objects into distinct variables.
    -SpreadOperator: {...}
    -RestParameters: function(){};

    #ARROW FUNCTION:
    ES6 introduces the arrow function and a whole lot of helper methods to simplify manipulating arrays, objects, strings, and numbers.
     - The arrow function works just like a normal function expression, but with reduced syntax: ( ) => { … }

     - By default, arrow functions are anonymous because we declare them with an operator rather than the ‘function’ keyword.

     - The map helper method creates arrays by calling functions on each individual element of an initial array.

     - The filter helper method creates arrays based on the same elements of an original array depending on a certain test.

     - String.repeat() creates large strings by concatenating a string a certain number of times.

     - The search methods for strings include .startsWith, .endsWith, .includes, and more.

     - Number type checking can occur through the - Number.isFinite method.

     - Number safety checking can occur through the - Number.isSafeInteger method.

     #Modules refer to reusable pieces of code within an application. Most often, they exist independently within separate files, which come in handy when having to split up a large application.

     - The export keyword sends primitive values, objects, or functions from one module to another.

     - The import keyword receives primitive values, objects, or functions from another module.

     - Using the default keyword gives a module a fallback function when exporting multiple values and methods.

     #Object-Oriented Programming:
      - Objects or Classes hold relevant data that interact with each other
      - Major Lang. like C#, C, JAVA, RUBBY
      - JavaScript supports a prototypal inheritance model.

      Classes in JavaScript construct structures of data based off of the state and behavior of real world objects and introduce a system of inheritance.

      The constructor keyword initializes an object for a class.

      The extends keyword creates subclasses and children of parent classes.

      Static methods in classes can be called even outside the context of class.

      Object-oriented programming models objects to create programs centered around the interactions of these objects with each other. Major programming languages like C, Java, and Ruby contain heavy support for object-oriented programming.

      JavaScript is not based on object-oriented programming, but a prototypal-inheritance model.

      A prototype is a characteristic in every JavaScript object that reveals its parent and the properties that it inherits.

      All JavaScript objects contain a prototype and can trace their chain of prototypal inheritance all the way back to the base level Object prototype.

      Arrow functions don’t create their own local ‘this’ object like a normal function prototype, but instead refer to the ‘this’ tied to its outer scope.

      Classes and prototypes appear everywhere in JavaScript. And every ES6 programmer needs to grasp these fundamental concepts to truly grasp how the language works. Luckily, once you understand that classes are simply prototypes, and prototypes are simply references to an object’s parent, it becomes less abstract.

      #Data Structures in ES6
      Data Structures in computer science refer to the programming storage of data for efficient usage in applications and algorithms.

        A Set compares to a more advanced array that has all unique elements and no duplicate values.

        Set iteration frequently occurs through the values() helper method.

        A Map represents a more advanced object in es6 with key-value pairs that can have non-string keys.

        Map iterate frequently occurs through the entries() helper method.
