// Conditions Else-If

// Adds another condition to resolve in an If Else Block.center

var a = true;
var b = false;
var c;

if (a && b == 5){
    c = true;
}
else if(b == true && a == false){
    c = false;
}
else {
    c = true;
}

// Nesting

function hello(){
    var msg = 'hello';
    function world() {mesg+= 'world.';}
    world();
    return msg;
}

console.log(hello());