import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsNew } from './ProductsNew';
import { ProductsShow } from "./ProductsShow";
import { ProductsIndex } from "./ProductsIndex";
import { CartedProductsIndex } from "./CartedProductsIndex";
import { OrdersIndex } from "./OrdersIndex";

import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";




export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});


  const handleIndexProducts = () => {
    // console.log('in handle index Products');
    // make my web request to api
    axios.get('http://localhost:3000/products.json').then(response => {
      console.log(response.data.articles);
      // Products = response.data
      setProducts(response.data);

    });
  };

  useEffect(handleIndexProducts, []);

  const handleShowProduct = (myProduct) => {
    console.log(myProduct);
    console.log('handling show Product.eventually this will change the value of isProductsShowVisible and trigger the modal')
    setIsProductsShowVisible(true);
    setCurrentProduct(myProduct)
  }
  
  const handleClose = () => {
    console.log('close modal')
    setIsProductsShowVisible(false);
  }

  

  const handleUpdateProduct = (productId, params) => {
    console.log('handling update Product...');
    axios.patch(`http://localhost:3000/Products/${productId}.json`, params).then(response => {
      console.log(response.data);
      setProducts(
        products.map(Product => {
          if (Product.id === response.data.id) {
            return response.data;
          } else {
            return Product;
          }
        })
      )
      setIsProductsShowVisible(false);

    })
  }

  const handleDestroyProduct = (productId) => {
    console.log('hanlding destroy Product')
    axios.delete(`http://localhost:3000/Products/${productId}.json`).then(response => {
      console.log(response.data);
      // Products.select {|Product| Product.id != Product_id}
      setProducts(products.filter(product => product.id != productId))
    })
  }

  return (
    <div className="container">

      <Routes>              
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/products/new" element={<ProductsNew  />} />
        <Route path="/carted_products" element={<CartedProductsIndex />} />
        <Route path="/orders" element={<OrdersIndex />} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct}/>} />
        

      </Routes>
      <br />
      <br />
      <br />
      {/* <button onClick={handleIndexProducts}>Get data</button> */}
      
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
      </Modal>
    </div>

  );
}