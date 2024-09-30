let num = 0;

const intervalId = setInterval((num) => {
    console.log(`your number ${num}`);
    num += 1 

    if(num > 10){
        clearInterval(intervalId)
    }

}, 1000);

console.log(intervalId);