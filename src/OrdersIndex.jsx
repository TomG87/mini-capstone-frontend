import axios from "axios"
import { useEffect, useState } from "react"

export function OrdersIndex() {   
  const [orders, setOrders] = useState([])
  // get data frmo the api
  const getOrders = () => {
    console.log('something')
    axios.get("http://localhost:3000/orders.json").then(response => {
      console.log(response.data);
      setOrders(response.data)
    })
  }

  useEffect(getOrders, [])
  // show that data to the user
 
  
  return (
    <div id="orders-index">
      <p>hello</p>
      {orders.map(order => (
        <div key={order.id}>
          <p>id: {order.id}</p>
          <p>subtotal: {order.subtotal}</p>
          <p>tax: {order.tax}</p>
          <p>total: {order.total}</p>
          <p>Products: </p>
          {order.carted_products.map(cp => (
            <div key={cp.id}>
              <p>name: {cp.product.name}</p>
              <p>quantiy: {cp.quantity}</p>
            </div>
          ))}

          <hr />
        </div>
      ))}
      
    </div>
  )
}