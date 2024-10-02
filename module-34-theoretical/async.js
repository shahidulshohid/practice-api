
// const myLoader = () => {
//     return new Promise((resolve, reject) => {
//         const success = Math.random();
//         if(success <= 0.5){
//             resolve(success)
//         }
//         else{
//             reject(success)
//         }
//     }) 
// } 

// myLoader()

// .then(data => console.log('resolve data', data))
// .catch(error => console.log('rejected with value', error))

// fetch('')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// async function loadData(){
//     const res = await fetch('')
//     const data = await res.json()
//     console.log(data)
// }


// const taskLoader = async() => {
//     const res = await fetch('')
//     const data = await res.json()
//     console.log(data)
// }


// loadData()




console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");