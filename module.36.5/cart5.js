const addProduct = () => {
    const product = document.getElementById('product-name').value
    const quantity = document.getElementById('product-quantity').value

    displayProduct(product, quantity)
    saveToLocalStorage(product, quantity)

    document.getElementById('product-name').value = ''
    document.getElementById('product-quantity').value = ''
}

const displayProduct = (product, quantity) => {
    // console.log(product, quantity)
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.classList.add('border', 'text-xl', 'text-orange-500', 'bg-amber-50', 'rounded', 'p-2')
    li.innerText = `${product} : ${quantity}
    `;
    ul.appendChild(li)
}

const getToLocalStorage = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart
}

const saveToLocalStorage = (product, quantity) => {
    cart = getToLocalStorage()
    cart[product] = quantity
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify )
}

const displayProductFromLocalStorage = () => {
   const saveProducts = getToLocalStorage()
   for(const product in saveProducts){
    const quantity = saveProducts[product]
    displayProduct(product, quantity)
   }
}
displayProductFromLocalStorage()