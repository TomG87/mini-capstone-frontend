export function ProductsIndex(props) {

  return (
  <div>
  <h1>Hello</h1>
  {props.products.map((product) => (
    <div key={product.id} >
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  ))}
  </div>
  );
}

