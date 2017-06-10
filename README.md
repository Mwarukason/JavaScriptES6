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

   SYNTHESIZING ES6 SYNTAX

   OPERATION AND DATASTRUCTURE ASSIGNMENT:
    -Simplifies extracting data on arrays and objects into distinct variables.
    -SpreadOperator: {...}
    -RestParameters: function(){};

    ARROW FUNCTION:
    ES6 introduces the arrow function and a whole lot of helper methods to simplify manipulating arrays, objects, strings, and numbers.
     - The arrow function works just like a normal function expression, but with reduced syntax: ( ) => { … }

     - By default, arrow functions are anonymous because we declare them with an operator rather than the ‘function’ keyword.

     - The map helper method creates arrays by calling functions on each individual element of an initial array.

     - The filter helper method creates arrays based on the same elements of an original array depending on a certain test.

     - String.repeat() creates large strings by concatenating a string a certain number of times.

     - The search methods for strings include .startsWith, .endsWith, .includes, and more.

     - Number type checking can occur through the - Number.isFinite method.

     - Number safety checking can occur through the - Number.isSafeInteger method.

     MODULES refer to reusable pieces of code within an application. Most often, they exist independently within separate files, which come in handy when having to split up a large application.

     - The export keyword sends primitive values, objects, or functions from one module to another.

     - The import keyword receives primitive values, objects, or functions from another module.

     - Using the default keyword gives a module a fallback function when exporting multiple values and methods.

     OBJECT ORIENTED PROGRAMMING IN ES6:
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

      DATASTRUCTURE IN ES6:
      Data Structures in computer science refer to the programming storage of data for efficient usage in applications and algorithms.

        A Set compares to a more advanced array that has all unique elements and no duplicate values.

        Set iteration frequently occurs through the values() helper method.

        A Map represents a more advanced object in es6 with key-value pairs that can have non-string keys.

        Map iterate frequently occurs through the entries() helper method.

        CLOSURES IN ES6:
        Closures in JavaScript and ES6 refer to functions that remember their creation environment and can further reference that environment’s independent variables.

        LEXICAL SCOPING:
         refers to the JavaScript concept of programs keeping track of variable locations to understand in which scopes they can be accessed.

        FUNCTION FACTORIES:
        create functions based on returning inner functions that manipulate its own arguments and the arguments of the outer function.

        DATA ECNCAPSULATION AND PRIVATE METHODS
        don’t exist natively in JavaScript but can be emulated with closures for data restriction and limited access.

        Overall, closures significantly improve the programs. Having closures can private methods allow to remove non-essential expressions and methods from the global scope of the program. Furthermore, understanding closures will put a programmer one step ahead of the game as a JavaScript programmer and software engineer. It’s a fundamental yet somewhat abstract concept. But it turns out to not feel so complex once you actually dive into some relevant examples.

        ES6 GENERATORS:
        Generators break the typical “run to completion” model of normal functions and can start, pause, and reset.

        Generators use the syntax of a normal function, but have an asterisk following the function keyword: function* generator { … } .

        The generator yield keyword signals when to ‘pause’ the function and return its current state.

        Generator instances don’t use the new keyword like the typical function prototype or Object.

        Using the generator’s special next() method allows us to access its yielded state.

        Passing values to the next() method introduces a way for generators to reset, or complete their runtime.

        An iterator in JavaScript demonstrates a type of object that can access values in a collection one at a time.

        A generatorcan provide a convenient and complex alternative to iterators

ASYNCHRONOUS PROGRAMMING, PROMISES, AND APIs:
        Synchronous programming refers to programs that run sequentially, from top to bottom, that may or may not encounter blocking operations that affect the run time.

        Asynchronous programming refers to programs that run on a looped operation and divert blocking operations to handlers in order maintain the run time.

        User interfaces and browsers implements systems based on asynchronous programming in order to handle the unpredictability of user events such as clicks, mouse moves, and more.

        ES6 promises allow programs to handle asynchronous processes by representing values that will return at some point in the future.

        Promises can exist in one of the three following states: pending, fulfilled, and rejected.

        HTTP or HyperText Transfer Protocol defines the foundation for data communication over the world wide web.

        HTTP Request methods include:

        GET for retrieving data from a server

        POST for sending data to a server

        HEAD, DELETE, PATCH, and more…

        The Fetch method begins to provides access in ES6 to HTTP request methods and grab data from apis by returning a promise that stands in for resulting data.

        ES6 programmers must understand how to implement promises in ES6. But when you reduce the Promise down to the simple idea of a stand in value for pending, fulfilled, and rejected state, the concept becomes clear.

        Plus, with promises you have the full power of the Internet’s vast array of APIs at your disposal. And when you can combine more than one api, you’ll have a truly awesome project on your hands.

ES7 and ES Proposals | Section Overview and Coding Break:

        ES7 released the new exponent operator which replaces Math.pow(x, y) with x ** y;

        ES7 standardized the .includes() method for arrays which checks if an element exists within an array collection.

        Object.values() returns an array of an object’s values as part of the new ES proposal to improve the Object prototype.

        Object.entries() returns an array of an object’s keys and values as part of the new ES proposal to improve the Object prototype.

        The async keyword introduces async functions in ecmascript and allow for more controlled flow of asynchronous functions.

        The await keyword adds blocking to asynchronous functions in order to temporarily stop the execution of statements and logic until certain data finishes returning a response.
