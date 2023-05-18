export function ProductsIndex(props) {


  return (
  <div>
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

