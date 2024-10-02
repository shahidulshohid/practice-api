// write a function called displayeDGreeting() that takes two parameters, name and delay time and logs a greeting message after the given delay time.
// input delayDGreeting('Alice', 2000)
// output Hello, Alice

 function delayDGreeting(name,delayTime){
    setTimeout(() => {
        console.log(`Hello, ${name}`)
    }, delayTime)

 }
 delayDGreeting('Alice', 2000)