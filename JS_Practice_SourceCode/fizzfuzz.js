var output = [];
var count = 1;
function fizzbuzz(){
    if (count%3===0){
        console.log("fizz");
    }
     if(count%5===0){
        console.log("buzz");
    }
     else if(count%3===0 && count%5===0){
        console.log("fizzbuzz");
    }
    else{
        output.push(count)
    }
    
    count++;
    console.log(output);
}
fizzbuzz();
