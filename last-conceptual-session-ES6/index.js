
//logical operator
let person = {
    gender:'male',
    isStudent:true,
    // details:'this is details',
}

// console.log(person.isStudent && 'he is student')
// const details = person.details || 'N/A'
// const details = person?.details || 'N/A'
// console.log(details);

//===============================================
// object destructuring 
const obj = {
    name: 'shahidul',
    age: 33,
    nest:{
        city:'rajshahi'
    }
}

// const {age, ...rest} = obj
// console.log(age)
// console.log(rest)
const {age, nest:{city}} =obj
console.log(age)
console.log(city)








