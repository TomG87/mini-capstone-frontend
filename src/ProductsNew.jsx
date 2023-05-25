import axios from "axios"
import { useState, useEffect } from "react"

export function ProductsNew(props) {
  const [suppliers,setSuppliers] = useState([])

  const getSuppliers = () => {
    console.log('getting suppliers')
    axios.get("http://localhost:3000/suppliers.json").then(response => {
      console.log(response.data)
      setSuppliers(response.data)
    })
  }
  useEffect(getSuppliers, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/products.json', params).then(response => {
      console.log(response.data);
    })
  }


  return (
      <div id="Products-new">
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
            <p>Name: <input name="name" type="text" /></p>
            <p>Price: <input name="price" type="number" /></p>
            <p>Description: <input name="description" type="text" /></p>
            <select name="supplier_id">
          {suppliers.map(supplier => (
            <option key={supplier.id} value={supplier.id}>{supplier.name} </option>
          ))}
            </select>
            < br />
            < br />
          <button type="submit">Create Product</button>
        </form>
      </div>
    );
  }
