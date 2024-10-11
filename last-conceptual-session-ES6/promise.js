const promise1 = new Promise((resolve, reject) => {
    console.log('promise is made')
   setTimeout(() => {
    const error = false

    if(!error) {
        resolve('promise is resolve')
    }
    else{
        reject('oppss... Error happend ...')
    }
   },2000)
})

// promise1
// .then(response => {
//     console.log(response)
// })
// .catch(error => {
//     console.log(error)
// })
// .finally(() => {
//     console.log('this is finally block')
// })

const getPromise = async() => {
   try {
    const response = await promise1
    console.log(response)
   } catch (error) {
    console.log(error)
   }
   finally{
    console.log('finally block run')
   }
}
getPromise()