var output = [];
var count = 1;
function fizzbuzz(){
    if (count%3===0){
        console.log("fizz");
    }
    else if(count%5===0){
        console.log("buzz");
    }
    if(count%3===0 && count%5===0){
        console.log("fizzbuzz");
    }
    else{
        output.push(count)
    }
    
    count++;
    
}
// fizzbuzz();