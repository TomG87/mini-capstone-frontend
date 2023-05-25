import { useState } from "react"

export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
  <div id="products-index">
    {searchTerm}
    <p>Search: <input type="test" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} /></p>
  {props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
    <div key={product.id} >
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => props.onShowProduct(product)}>More info</button>
    </div>
  ))};
  </div>
  );
}

