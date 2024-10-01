const user = {id: 1, name:'gorip amir', job:'actor'}
//javascript Object Notation (JSON)
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified)

const shop = {
    name: 'Alia',
    address: {
        street: 'kochu khet voot er goli',
        city:'Ranbir',
        country: 'BD',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue:45000,
    isOpen: true,
    isNew: false,
}
// console.log(shop)
const shopJson = JSON.stringify(shop)
console.log(shopJson)

const shopObj = JSON.parse(shopJson)
console.log(shopObj)
