function foo(){
    console.log(2)
    var bar = "bar";
    console.log(3)
    function baz(){
        console.log(4)
        console.log(bar); //lexical
        console.log(5)
    }
    console.log(6)
    baz();
    console.log(7)
}
console.log(1)
foo();
console.log(8)