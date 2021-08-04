var prompt = require('prompt-sync')();
var num  = prompt('What is the number you are looking for?')

array= [4, 10, 11, 15, 25, 2, -6,20, 90, 500];
counter = 0;
found= false
position =[]

for (let i =0; i < array.length; i++){
    if (num == array[i]){
        found= true;
        counter++;
        position.push(i+1)
    }
}
    if(!found){
    console.log('The number you are looking for is not found')
    }
    else{
        console.log('Your number is found ' + position +' and occurs '+ counter +' times')
    }



