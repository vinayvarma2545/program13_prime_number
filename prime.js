const value =-78;
let result = true;


if (value>1){
    for (let i=2;i<value;i++){
        if(value%i==0){
            result = false
            break;
        }
    }

    if(result){
    console.log(`${value} is prime number`)
}

else{
    console.log(`${value} is not a prime number`)
}
}

else if(value===1){
    console.log(`1 is niether prime nor composite`)
}

else{
    console.log(`please enter positive integer only`)
}