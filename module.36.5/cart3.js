const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value 
    const quantity = quantityField.value
    displayProduct(product, quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li)
}

const getStoredShoppingCart = () => {
    let cart = {name:'shahidl', age:22}
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.stringify(cart)
    }
    console.log(cart)
}