//write an async/await function that fetch data from an api and logs a message

const useAsyncAwait = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}