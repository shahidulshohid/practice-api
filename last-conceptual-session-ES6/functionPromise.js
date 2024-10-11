const getPromise = (name) => {
    return new Promise((resolve, reject) => {
        console.log(`Hello ${name}. Your promise made`)
        console.log('promise is made')
       setTimeout(() => {
        const error = false
    
        if(!error) {
            resolve(`${name} Your promise is resolved`)
        }
        else{
            reject(`oppss... ${name} Error happend ...`)
        }
       },2000)
    })
}
getPromise('shahidul islam')
.then(res => console.log(res))
.catch(error => console.log(error))