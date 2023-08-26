//lexical scope in javascript
function outerfinction(){
    let x = 5;
    let y = 6;
    function innerfunction(){
        console.log(x);
        console.log(y);
    }
    innerfunction();
}