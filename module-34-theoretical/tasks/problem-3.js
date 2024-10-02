// the function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. complete the code below and see the output
// const jokeInterval = setInterval (?, ?);

// after 10 seconds, stop telling jokes

// setTimeout(()=>{
//     //write code
// }, ?)


function tellJoke(){
    const jokeInterval = setInterval( () => {
        console.log("why don't scientist trust atoms? they make up everything !")
    }, 2000)
    setTimeout(() => {
        clearTimeout(jokeInterval)
    }, 10000);
}
tellJoke()