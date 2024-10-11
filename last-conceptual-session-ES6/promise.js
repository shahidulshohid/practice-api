const promise1 = new promise((resolve, reject) => {
    console.log('promise is made')
    const error = true

    if(!error) {
        resolve()
    }
    else{
        reject()
    }
})

promise1
.then(response => {
    console.log('this is response block')
})
.catch(error => {
    console.log('this is error catch block')
})