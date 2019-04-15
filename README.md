LABjs is a dynamic script loader

LHS is the targer, and RHS is the source

the difference between function declarations, function expressions and block scope

function declarations : function + name ()

the function expressions: const name = function + name1 ()

_always use name in function expression_

lexical scope and dynamic scope

- you can take a look that LABjs if you want to look at performance script loading

- grips is a templating engine

- Nested scope
- Hoisting
- this
- Closure

#Scope: where to look for things

- when we use the variable, somebody will find it out
- that javascript is dynamic, it's an interpreted language
- in javascript, we send the original source code program, so in a sense, it is compiled, but it's compiled every single time that it's run, but that doesn't mean it's not compiled
- interpreted

* what is the difference between compiled language and interpreted language

\*Compiler javascript has function scope only

- finding declarations of variables and functions and putting them into their appropriate

var foo = "bar" => may be single statement with declaration and init the value but actual two entirely separate operations

- there is a declaration operation, which we could map to saying the var foo part and there is an initialization operation, and those two operations actually happen at totally separate times, they might only be a couple of microseconds apart and in fact it's not event the same mechanism
- so that the compiler is going to do a single pass

JIT this stands for just in time compilation, the function here, we don't see it being called so rather than compiling the contents of that function, we will just skip over it and we will come back to it later, we will compile the function bar whenever we are forced to, so we will defer the compilation and we will compile it just in time

- the compiler javascript make a best guess because it is not eought of time and so many of the engines will make a guess but they will instrument that initial guess

the arrow function is not binding the argument and this keywork, otherwise the regular function will bind the argument and this keywork

The difference between Object.create and the function constructor pattern is that Object.create builds an object that inherits directly from the one that we passed into the first argument, While, on the other hand, the function constructor the newly created object inherits from the constructor's prototype property

es6 modules in order to make our code more modular and therefore, easier to maintain. By separating different parts of out app in to diffrent files. And es 6 brought us exactly that possibility by implementing modules. Now the problem with these modules is that, right now, browser can not really support this functionality yet and so we have to bundle these modules together into single file using something called a `module bundler` and the most popular one out there is called webpack, now webpack can actually do so much more than just bundling modules like codesplitting, loading menu type of assets like sas or images, decreasing our javascript bundle size using algorithm called treeshaking and much much more

#WEBPACK

npm install webpack and webpack-dev-server and webpack-cli

note webpack-dev-server will note write file on the disk, it will simple stream them to the server

html-webpack-plugin will auto copy index.html into dist/index.html

webpack loader this alows us to import or to load all kindle of different files. convert es 6 to es 5

#BABEL

npm install babel-core, this contains the core functionality of the compiler
babel-preset-env this will take care, that all the moderm javascript feature are convert back to es5
babel-loader this one need for webpack in order to actually load babel files
babel-pollyfill this one will pollyfill all the code which were not in es 5 and need to add some code to webpack config file into entry point

#ES6 Modules

Fractional js
// count =2.5 ---> 2 1/2
// count =0.5 ---> 1/2
