var foo = function bar() {
    var foo = "baz";
    console.log('1',foo)
    function baz(foo){
        console.log('2', foo)
        foo = bar;
        console.log('3', foo)
        foo;
        console.log('4', foo)
    }
    console.log('5', foo)
    baz();
    console.log('6', foo)
}

foo();
console.log('7', foo)
bar();