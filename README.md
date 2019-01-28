LABjs is a dynamic script loader

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
