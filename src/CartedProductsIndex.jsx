import axios from "axios"
import { useEffect, useState } from "react"

export function CartedProductsIndex() {   
  const [cartedProducts, setCartedProducts] = useState([])
  // get data frmo the api
  const getCartedProducts = () => {
    console.log('something')
    axios.get("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data);
      setCartedProducts(response.data)
    })
  }

  useEffect(getCartedProducts, [])
  // show that data to the user
  const handleBuyProducts = () => {
    console.log('buying products')
    axios.post("http://localhost:3000/orders.json").then(response => {
      window.location.href = "/orders"
    })
  }
  const handleDeleteCartedProduct = (cartedProductId) => {
    // make proper axios request
    axios.delete(`http://localhost:3000/carted_products/${cartedProductId}.json`).then(response => {
      console.log(response.data)
      setCartedProducts(cartedProducts.filter((cp) => cp.id !== cartedProductId));
    })
    // remove that from the carted_products array
  }
  
  return (
    <div id="carted-products-index">
      <p>hello</p>
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          <p>id: {cartedProduct.id}</p>
          <p>name: {cartedProduct.product.name}</p>
          <p>price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <button onClick={() => {handleDeleteCartedProduct(cartedProduct.id)}}>remove</button>
          <hr />
        </div>
      ))}
      <button onClick={handleBuyProducts}>Buy</button>
    </div>
  )
}